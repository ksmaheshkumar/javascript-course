// Copyright (c) 2014 Quildreen Motta <quildreen@gmail.com>
//
// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation files
// (the "Software"), to deal in the Software without restriction,
// including without limitation the rights to use, copy, modify, merge,
// publish, distribute, sublicense, and/or sell copies of the Software,
// and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var spec    = require('hifive')()
var alright = require('alright')
var claire  = require('claire')

var forAll = claire.forAll
var T      = claire.data

module.exports = spec('Boolean Logic', function(it, spec) {

  spec('(1) Propriedades das definições dos operadores lógicos', function(it) {
    it('Conjunção', forAll(T.Bool, T.Bool).satisfy($law$conjunction).asTest())
    it('Disjunção', forAll(T.Bool, T.Bool).satisfy($law$disjunction).asTest())
    it('Negação',   forAll(T.Bool).satisfy($law$negation).asTest())
  })

  spec('(2) Lei de Identidade', function(it) {
    it('Conjunção', forAll(T.Bool).satisfy($law$conjunction_identity).asTest())
    it('Disjunção', forAll(T.Bool).satisfy($law$disjunction_identity).asTest())
  })

  spec('(3) Lei de Aniquilação', function(it) {
    it('Conjunção', forAll(T.Bool).satisfy($law$conjunction_annihilation).asTest())
    it('Disjunção', forAll(T.Bool).satisfy($law$disjunction_annihilation).asTest())
  })

})
