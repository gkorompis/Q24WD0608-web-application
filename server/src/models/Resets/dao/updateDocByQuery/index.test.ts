import 'jest';
import { Unit } from "./index.js";
import { UserQuery } from "../../../../utils/types.js";
import { v4 as uuidv4 } from 'uuid';

describe("testing findManyDoc at User", ()=>{
    const uniqueId = uuidv4();
    it("should return update info", async()=>{
        const query: UserQuery = {
            username: 'johndoe',
        };
        const update: UserQuery = {
            email: `johndoe${uniqueId}`,
        };
        const testResponse = await Unit({query, update});
        expect(testResponse).toBeDefined();
    })
})
