import { setupWorker } from "msw";
import { handlers } from "./handlers";

// Mock Service Worker operates client-side by registering a Service Worker responsible for requests interception.
export const worker = setupWorker(...handlers);
