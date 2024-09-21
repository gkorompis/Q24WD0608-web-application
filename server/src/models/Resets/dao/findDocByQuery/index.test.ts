import 'jest';
import { Unit } from "./index.js";
import { UserQuery } from "../../../../utils/types.js";

describe("testing findManyDoc at User", ()=>{
    //@ts-ignore
    it("should return matched users", async()=>{
        const query: UserQuery = {
            username: 'johndoe',
        };
        const testResponse = await Unit({query});
        expect(testResponse).toBeDefined();
    })
})
