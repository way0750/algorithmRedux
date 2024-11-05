const chai = require('chai');
const sinon = require('sinon');
Object.assign(global, chai, { sandbox: sinon.createSandbox() });
// global.sandbox = sinon.createSandbox();