import { rest } from "msw";
import responses from "./data";

export const handlers = [
  /**
   * @description
   * limit - 반환할 배열의 Size
   */
  rest.get("/search", (req, res, ctx) => {
    const todoList: Array<string> = responses.todoList.data;
    const query = req.url.searchParams.get("q"); // 검색 단어
    const page = req.url.searchParams.get("page"); // 페이지 번호
    const limit = req.url.searchParams.get("limit"); // 각 페이지의 사이즈

    /**
     * 배열 안에서 일치하는 문자열을 찾아서 배열로 반환
     * @description
     * 대소문자 구분 무시
     * @param {Array} array init array
     * @param {String} query string for search
     * @returns {Array} filtered results
     */
    const stringFilter = (array: Array<string>, query: string | null) => {
      return array.filter(
        (sentence: string) =>
          query && sentence.toUpperCase().includes(query.toUpperCase(), 0)
      );
    };

    // 필수 parameter가 들어오지 않은 경우에 대한 에러처리
    let data: object = {
      opcode: 200,
      query: query,
      page: Number(page),
      limit: Number(limit),
      result: stringFilter(todoList, query) || [],
      responseAt: Date.now(),
    };

    return res(ctx.status(200), ctx.json(data));
  }),
];
