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
    const limit = req.url.searchParams.get("limit"); // 결과의 최대 길이 값(array length)

    /**
     * 배열 안에서 일치하는 문자열을 찾아서 배열로 반환
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
