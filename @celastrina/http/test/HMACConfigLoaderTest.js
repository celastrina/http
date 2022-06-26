/*
 * Copyright (c) 2020, Robert R Murrell.
 *
 * MIT License
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
const {HMAC, HMACConfigLoader, HMACAddOn} = require("../HTTP");
const assert = require("assert");
const {MockAzureFunctionContext} = require("./AzureFunctionContextMock");

describe("HMACConfigLoaderTest", () => {
    describe("#_load(_Object)", () => {
        it("should set HMAC in config", async () => {
            let _azcontext = new MockAzureFunctionContext();
            let _hmac = new HMAC("1234567890123456");
            let _Configuration = {
                $object: {contentType: "application/vnd.celastrinajs.config+json;HMAC"},
                hmac: _hmac
            };
            let _loader = new HMACConfigLoader();
            let _config = {};
            await _loader.load(_Configuration, _config);
            assert.deepStrictEqual(_config[HMACAddOn.CONFIG_HMAC], _Configuration, "Expected _Configuration.");
        });
    });
});
