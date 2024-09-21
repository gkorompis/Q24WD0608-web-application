var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import 'jest';
import { Unit } from "./index.js";
describe("testing findManyDoc at User", () => {
    //@ts-ignore
    it("should return matched users", () => __awaiter(void 0, void 0, void 0, function* () {
        const query = {
            username: 'johndoe',
        };
        const testResponse = yield Unit({ query });
        expect(testResponse).toBeDefined();
    }));
});
