import server from '../src/index'

import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe("Feature: Server is alive. ", () => {
    it("'Type:[get], Endpoint:'/'", (done) => {
        chai.request(server)
            .get("/")
            .end((err:any,res:ChaiHttp.Response)=>{
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200);
                chai.expect(res).to.be.json;
                done();
            });
    });
});

