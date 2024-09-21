import 'jest';
import { Unit } from "./index.js";
import { UserDocument } from "../../../../utils/types.js";
import { v4 as uuidv4 } from 'uuid';



describe("testing createDoc at User", ()=>{
    const uniqueId = uuidv4();
    //@ts-ignore
    it("should return new user", async()=>{
        const document: UserDocument = {
            name: "John D",
            email: `${uniqueId}@example.com`,
            username: "test"+uniqueId,
            role: "member",
            password: "password123",
            organization: ["web"]
        };
        const testResponse = await Unit({document});
        expect(testResponse).toBeDefined();
    })
})
