(self.webpackChunkclient=self.webpackChunkclient||[]).push([[670],{2666:(e,t,r)=>{"use strict";r.r(t),r.d(t,{CheckoutModule:()=>M});var o=r(8583),i=r(665),n=r(3018),s=r(4878),c=r(9508),a=r(8596);function l(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"li",4),n.TgZ(1,"button",5),n.NdJ("click",function(){const t=n.CHM(e).index;return n.oxw().onClick(t)}),n._uU(2),n.qZA(),n.qZA()}if(2&e){const e=t.$implicit,r=t.index,o=n.oxw();n.xp6(1),n.ekj("active",o.selectedIndex===r),n.Q6J("disabled",!0),n.xp6(1),n.hij(" ",e.label," ")}}let d=(()=>{class e extends a.B8{ngOnInit(){this.linear=this.linearModeSelected}onClick(e){this.selectedIndex=e}}return e.\u0275fac=function(){let t;return function(r){return(t||(t=n.n5z(e)))(r||e)}}(),e.\u0275cmp=n.Xpm({type:e,selectors:[["app-stepper"]],inputs:{linearModeSelected:"linearModeSelected"},features:[n._Bn([{provide:a.B8,useExisting:e}]),n.qOj],decls:5,vars:2,consts:[[1,"container"],[1,"nav","nav-pills","nav-justified"],["class","nav-item",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],[1,"nav-item"],[1,"nav-link","text-uppercase","font-weight-bold","btn-block",2,"padding","1.20em",3,"disabled","click"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"ul",1),n.YNc(2,l,3,4,"li",2),n.qZA(),n.TgZ(3,"div"),n.GkF(4,3),n.qZA(),n.qZA()),2&e&&(n.xp6(2),n.Q6J("ngForOf",t.steps),n.xp6(2),n.Q6J("ngTemplateOutlet",t.selected.content))},directives:[o.sg,o.tP],styles:["button.nav-link[_ngcontent-%COMP%], button.nav-link[_ngcontent-%COMP%]:active{background:#e9ecef;border-radius:0;border:none}button.nav-link[_ngcontent-%COMP%]:active{outline:none}"]}),e})();var u=r(9344),p=r(4015),m=r(15);let h=(()=>{class e{constructor(e,t){this.accountService=e,this.toastr=t}ngOnInit(){}saveUserAddress(){this.accountService.updateUserAddress(this.checkoutForm.get("addressForm").value).subscribe(e=>{this.toastr.success("Address saved"),this.checkoutForm.get("addressForm").reset(e)},e=>{this.toastr.error(e.message),console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(s.B),n.Y36(u._W))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-checkout-address"]],inputs:{checkoutForm:"checkoutForm"},decls:26,vars:9,consts:[[1,"mt-4",3,"formGroup"],[1,"d-flex","justify-content-between","align-items-center"],[1,"btn","btn-outline-success","mb-3",3,"disabled","click"],["formGroupName","addressForm",1,"row"],[1,"form-group","col-6"],["formControlName","firstName",3,"label"],["formControlName","lastName",3,"label"],["formControlName","street",3,"label"],["formControlName","city",3,"label"],["formControlName","state",3,"label"],["formControlName","zipCode",3,"label"],[1,"float-none","d-flex","justify-content-between","flex-colum","flex-lg-row","mb-5"],["routerLink","/basket",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn","btn-primary",3,"disabled"],[1,"fa","fa-angle-right"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"h4"),n._uU(3,"Shipping Addrees"),n.qZA(),n.TgZ(4,"button",2),n.NdJ("click",function(){return t.saveUserAddress()}),n._uU(5," Save as default address "),n.qZA(),n.qZA(),n.TgZ(6,"div",3),n.TgZ(7,"div",4),n._UZ(8,"app-text-input",5),n.qZA(),n.TgZ(9,"div",4),n._UZ(10,"app-text-input",6),n.qZA(),n.TgZ(11,"div",4),n._UZ(12,"app-text-input",7),n.qZA(),n.TgZ(13,"div",4),n._UZ(14,"app-text-input",8),n.qZA(),n.TgZ(15,"div",4),n._UZ(16,"app-text-input",9),n.qZA(),n.TgZ(17,"div",4),n._UZ(18,"app-text-input",10),n.qZA(),n.qZA(),n.qZA(),n.TgZ(19,"div",11),n.TgZ(20,"button",12),n._UZ(21,"i",13),n._uU(22," Back to basket "),n.qZA(),n.TgZ(23,"button",14),n._uU(24," Go to Delivery "),n._UZ(25,"i",15),n.qZA(),n.qZA()),2&e&&(n.Q6J("formGroup",t.checkoutForm),n.xp6(4),n.Q6J("disabled",!t.checkoutForm.get("addressForm").valid||!t.checkoutForm.get("addressForm").dirty),n.xp6(4),n.Q6J("label","First Name"),n.xp6(2),n.Q6J("label","Last Name"),n.xp6(2),n.Q6J("label","Street"),n.xp6(2),n.Q6J("label","City"),n.xp6(2),n.Q6J("label","State"),n.xp6(2),n.Q6J("label","Zip Code"),n.xp6(5),n.Q6J("disabled",t.checkoutForm.get("addressForm").invalid))},directives:[i.JL,i.sg,i.x0,p.t,i.JJ,i.u,m.rH,a.st],styles:[""]}),e})();var g=r(8002),f=r(2340),v=r(1841);let b=(()=>{class e{constructor(e){this.http=e,this.baseUrl=f.N.apiUrl}createOrder(e){return this.http.post(this.baseUrl+"orders",e)}getDeliveryMethods(){return this.http.get(this.baseUrl+"orders/deliveryMethods").pipe((0,g.U)(e=>e.sort((e,t)=>t.price-e.price)))}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(v.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function Z(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"div",9),n.TgZ(1,"input",10),n.NdJ("click",function(){const t=n.CHM(e).$implicit;return n.oxw().setShippingPrice(t)}),n.qZA(),n.TgZ(2,"label",11),n.TgZ(3,"strong"),n._uU(4),n.ALo(5,"currency"),n.qZA(),n._UZ(6,"br"),n.TgZ(7,"span",12),n._uU(8),n.qZA(),n.qZA(),n.qZA()}if(2&e){const e=t.$implicit;n.xp6(1),n.s9C("id",e.id),n.s9C("value",e.id),n.xp6(1),n.s9C("for",e.id),n.xp6(2),n.AsE("",e.shortName," - ",n.lcZ(5,6,e.price),""),n.xp6(4),n.Oqu(e.description)}}let k=(()=>{class e{constructor(e,t){this.checkService=e,this.basketService=t}ngOnInit(){this.checkService.getDeliveryMethods().subscribe(e=>{this.deliveryMethods=e},e=>{console.log(e)})}setShippingPrice(e){this.basketService.setShippingPrice(e)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(b),n.Y36(c.v))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-checkout-delivery"]],inputs:{checkoutForm:"checkoutForm"},decls:12,vars:3,consts:[[1,"mt-4",3,"formGroup"],[1,"mb-3"],["formGroupName","deliveryForm",1,"row","ml-5"],["class","col-6 form-group",4,"ngFor","ngForOf"],[1,"float-none","d-flex","justify-content-between","flex-colum","flex-lg-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn","btn-primary",3,"disabled"],[1,"fa","fa-angle-right"],[1,"col-6","form-group"],["type","radio","formControlName","deliveryMethod",1,"custom-control-input",3,"id","value","click"],[1,"custom-control-label",3,"for"],[1,"label-description"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"h4",1),n._uU(2,"Choose your delivery method"),n.qZA(),n.TgZ(3,"div",2),n.YNc(4,Z,9,8,"div",3),n.qZA(),n.qZA(),n.TgZ(5,"div",4),n.TgZ(6,"button",5),n._UZ(7,"i",6),n._uU(8," Back to Address "),n.qZA(),n.TgZ(9,"button",7),n._uU(10," Go to Review "),n._UZ(11,"i",8),n.qZA(),n.qZA()),2&e&&(n.Q6J("formGroup",t.checkoutForm),n.xp6(4),n.Q6J("ngForOf",t.deliveryMethods),n.xp6(5),n.Q6J("disabled",t.checkoutForm.get("deliveryForm").invalid))},directives:[i.JL,i.sg,i.x0,o.sg,a.po,a.st,i._,i.Fj,i.JJ,i.u],pipes:[o.H9],styles:[""]}),e})();var y=r(3449);let x=(()=>{class e{constructor(e,t){this.basketService=e,this.toastr=t}ngOnInit(){this.basket$=this.basketService.basket$}createPaymentIntent(){this.basketService.createPaymentIntent().subscribe(e=>{this.appStepper.next()},e=>{console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(c.v),n.Y36(u._W))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-checkout-review"]],inputs:{appStepper:"appStepper"},decls:10,vars:4,consts:[[1,"mt-4"],[3,"isBasket","items"],[1,"float-none","d-flex","justify-content-between","flex-colum","flex-lg-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],[1,"btn","btn-primary",3,"click"],[1,"fa","fa-angle-right"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n._UZ(1,"app-basket-summary",1),n.ALo(2,"async"),n.qZA(),n.TgZ(3,"div",2),n.TgZ(4,"button",3),n._UZ(5,"i",4),n._uU(6," Back to Delivery "),n.qZA(),n.TgZ(7,"button",5),n.NdJ("click",function(){return t.createPaymentIntent()}),n._uU(8," Go to Payment "),n._UZ(9,"i",6),n.qZA(),n.qZA()),2&e&&(n.xp6(1),n.Q6J("isBasket",!1)("items",n.lcZ(2,2,t.basket$).items))},directives:[y.b,a.po],pipes:[o.Ov],styles:[""]}),e})();function A(e,t,r,o,i,n,s){try{var c=e[n](s),a=c.value}catch(l){return void r(l)}c.done?t(a):Promise.resolve(a).then(o,i)}function T(e){return function(){var t=this,r=arguments;return new Promise(function(o,i){var n=e.apply(t,r);function s(e){A(n,o,i,s,c,"next",e)}function c(e){A(n,o,i,s,c,"throw",e)}s(void 0)})}}const q=["cardNumber"],F=["cardExpiry"],C=["cardCvc"];function _(e,t){if(1&e&&(n.ynx(0),n.TgZ(1,"span",17),n._uU(2),n.qZA(),n.BQk()),2&e){const e=n.oxw();n.xp6(2),n.Oqu(e.cardErrors)}}function U(e,t){1&e&&n._UZ(0,"i",18)}let J=(()=>{class e{constructor(e,t,r,o){this.basketService=e,this.checkoutService=t,this.toastr=r,this.router=o,this.cardHandler=this.onChange.bind(this),this.loading=!1,this.cardNumberValid=!1,this.cardExpiryValid=!1,this.cardCvcValid=!1}ngAfterViewInit(){this.stripe=Stripe("pk_test_51JRx66F6P9PwSnl9lft8FGIKvdyiXOC5hHRXtQ63qeLyOwCgvjxpmb3yT2E2U2dNojwOkZDC3HO14Bn4WTMpL68K00vhCKIKdJ");const e=this.stripe.elements();this.cardNumber=e.create("cardNumber"),this.cardNumber.mount(this.cardNumberElement.nativeElement),this.cardNumber.addEventListener("change",this.cardHandler),this.cardExpiry=e.create("cardExpiry"),this.cardExpiry.mount(this.cardExpiryElement.nativeElement),this.cardExpiry.addEventListener("change",this.cardHandler),this.cardCvc=e.create("cardCvc"),this.cardCvc.mount(this.cardCvcElement.nativeElement),this.cardCvc.addEventListener("change",this.cardHandler)}ngOnDestroy(){this.cardNumber.destroy(),this.cardExpiry.destroy(),this.cardCvc.destroy()}onChange(e){switch(console.log(e),this.cardErrors=e.error?e.error.message:null,e.elementType){case"cardNumber":this.cardNumberValid=e.complete;break;case"cardExpiry":this.cardExpiryValid=e.complete;break;case"cardCvc":this.cardCvcValid=e.complete}}submitOrder(){var e=this;return T(function*(){e.loading=!0;const t=e.basketService.getCurrentBasketValue();try{const r=yield e.createOrder(t),o=yield e.confirmPaymentWithStripe(t);o.paymentIntent?(e.basketService.deleteBasket(t),e.router.navigate(["checkout/success"],{state:r})):e.toastr.error(o.error.message),e.loading=!1}catch(r){console.log(r),e.loading=!1}})()}confirmPaymentWithStripe(e){var t=this;return T(function*(){return t.stripe.confirmCardPayment(e.clientSecret,{payment_method:{card:t.cardNumber,billing_details:{name:t.checkoutForm.get("paymentForm").get("nameOnCard").value}}})})()}createOrder(e){var t=this;return T(function*(){const r=t.getOrderToCreate(e);return t.checkoutService.createOrder(r).toPromise()})()}getOrderToCreate(e){return{basketId:e.id,deliveryMethodId:+this.checkoutForm.get("deliveryForm").get("deliveryMethod").value,shipToAddress:this.checkoutForm.get("addressForm").value}}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(c.v),n.Y36(b),n.Y36(u._W),n.Y36(m.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-checkout-payment"]],viewQuery:function(e,t){if(1&e&&(n.Gf(q,7),n.Gf(F,7),n.Gf(C,7)),2&e){let e;n.iGM(e=n.CRH())&&(t.cardNumberElement=e.first),n.iGM(e=n.CRH())&&(t.cardExpiryElement=e.first),n.iGM(e=n.CRH())&&(t.cardCvcElement=e.first)}},inputs:{checkoutForm:"checkoutForm"},decls:22,vars:5,consts:[[1,"mt-4",3,"formGroup"],[1,"row"],["formGroupName","paymentForm",1,"form-group","col-12"],["formControlName","nameOnCard",3,"label"],[1,"form-group","col-6"],[1,"form-control","py-3"],["cardNumber",""],[4,"ngIf"],[1,"form-group","col-3"],["cardExpiry",""],["cardCvc",""],[1,"float-none","d-flex","justify-content-between","flex-colum","flex-lg-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],[1,"btn","btn-primary",3,"disabled","click"],[1,"fa","fa-angle-right"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"text-danger"],[1,"fa","fa-spinner","fa-spin"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n._UZ(3,"app-text-input",3),n.qZA(),n.TgZ(4,"div",4),n._UZ(5,"div",5,6),n.YNc(7,_,3,1,"ng-container",7),n.qZA(),n.TgZ(8,"div",8),n._UZ(9,"div",5,9),n.qZA(),n.TgZ(11,"div",8),n._UZ(12,"div",5,10),n.qZA(),n.qZA(),n.qZA(),n.TgZ(14,"div",11),n.TgZ(15,"button",12),n._UZ(16,"i",13),n._uU(17," Back to Review "),n.qZA(),n.TgZ(18,"button",14),n.NdJ("click",function(){return t.submitOrder()}),n._uU(19," Submit Order "),n._UZ(20,"i",15),n.YNc(21,U,1,0,"i",16),n.qZA(),n.qZA()),2&e&&(n.Q6J("formGroup",t.checkoutForm),n.xp6(3),n.Q6J("label","Name of card"),n.xp6(4),n.Q6J("ngIf",t.cardErrors),n.xp6(11),n.Q6J("disabled",t.loading||t.checkoutForm.get("paymentForm").invalid||!t.cardNumberValid||!t.cardExpiryValid||!t.cardCvcValid),n.xp6(3),n.Q6J("ngIf",t.loading))},directives:[i.JL,i.sg,i.x0,p.t,i.JJ,i.u,o.O5,a.po],styles:[""]}),e})();var S=r(9281);function N(e,t){if(1&e&&(n._UZ(0,"app-order-totals",11),n.ALo(1,"async"),n.ALo(2,"async"),n.ALo(3,"async")),2&e){const e=n.oxw();n.Q6J("shippingPrice",n.lcZ(1,3,e.basketTotals$).shipping)("subtotal",n.lcZ(2,5,e.basketTotals$).subtotal)("total",n.lcZ(3,7,e.basketTotals$).total)}}function w(e,t){if(1&e&&(n.TgZ(0,"button",4),n._uU(1,"View your order"),n.qZA()),2&e){const e=n.oxw();n.MGl("routerLink","/orders/",null==e.order?null:e.order.id,"")}}function O(e,t){if(1&e&&(n.TgZ(0,"button",4),n._uU(1,"View your orders"),n.qZA()),2&e){const e=n.oxw();n.MGl("routerLink","/orders/",null==e.order?null:e.order.id,"")}}const I=[{path:"",component:(()=>{class e{constructor(e,t,r){this.fb=e,this.accountService=t,this.basketService=r}ngOnInit(){this.createCheckoutForm(),this.getAddressFormValues(),this.getDeliveryMethodValue(),this.basketTotals$=this.basketService.basketTotals$}createCheckoutForm(){this.checkoutForm=this.fb.group({addressForm:this.fb.group({firstName:[null,i.kI.required],lastName:[null,i.kI.required],street:[null,i.kI.required],city:[null,i.kI.required],state:[null,i.kI.required],zipCode:[null,i.kI.required]}),deliveryForm:this.fb.group({deliveryMethod:[null,i.kI.required]}),paymentForm:this.fb.group({nameOnCard:[null,i.kI.required]})})}getAddressFormValues(){this.accountService.getUserAddress().subscribe(e=>{e&&(console.log(e),this.checkoutForm.get("addressForm").patchValue(e))},e=>{console.log(e)})}getDeliveryMethodValue(){const e=this.basketService.getCurrentBasketValue();null!==e.deliveryMethodId&&this.checkoutForm.get("deliveryForm").get("deliveryMethod").patchValue(e.deliveryMethodId.toString)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(i.qu),n.Y36(s.B),n.Y36(c.v))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-checkout"]],decls:16,vars:14,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-8"],[3,"linearModeSelected"],["appStepper",""],[3,"label","completed"],[3,"checkoutForm"],[3,"label"],[3,"appStepper"],[1,"col-4"],[3,"shippingPrice","subtotal","total",4,"ngIf"],[3,"shippingPrice","subtotal","total"]],template:function(e,t){if(1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"app-stepper",3,4),n.TgZ(5,"cdk-step",5),n._UZ(6,"app-checkout-address",6),n.qZA(),n.TgZ(7,"cdk-step",5),n._UZ(8,"app-checkout-delivery",6),n.qZA(),n.TgZ(9,"cdk-step",7),n._UZ(10,"app-checkout-review",8),n.qZA(),n.TgZ(11,"cdk-step",7),n._UZ(12,"app-checkout-payment",6),n.qZA(),n.qZA(),n.qZA(),n.TgZ(13,"div",9),n.YNc(14,N,4,9,"app-order-totals",10),n.ALo(15,"async"),n.qZA(),n.qZA(),n.qZA()),2&e){const e=n.MAs(4);n.xp6(3),n.Q6J("linearModeSelected",!0),n.xp6(2),n.Q6J("label","Address")("completed",t.checkoutForm.get("addressForm").valid),n.xp6(1),n.Q6J("checkoutForm",t.checkoutForm),n.xp6(1),n.Q6J("label","Delivery")("completed",t.checkoutForm.get("deliveryForm").valid),n.xp6(1),n.Q6J("checkoutForm",t.checkoutForm),n.xp6(1),n.Q6J("label","Review"),n.xp6(1),n.Q6J("appStepper",e),n.xp6(1),n.Q6J("label","Payment"),n.xp6(1),n.Q6J("checkoutForm",t.checkoutForm),n.xp6(2),n.Q6J("ngIf",n.lcZ(15,12,t.basketTotals$))}},directives:[d,a.be,h,k,x,J,o.O5,S.S],pipes:[o.Ov],styles:[""]}),e})()},{path:"success",component:(()=>{class e{constructor(e){this.router=e;const t=this.router.getCurrentNavigation(),r=t&&t.extras&&t.extras.state;r&&(this.order=r)}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(m.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-checkout-success"]],decls:9,vars:2,consts:[[1,"container","mt-5"],[1,"fa","fa-check-circle","fa-5x",2,"color","green"],[1,"mb-4"],["class","btn btn-outline-success",3,"routerLink",4,"ngIf"],[1,"btn","btn-outline-success",3,"routerLink"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div"),n._UZ(2,"i",1),n.qZA(),n.TgZ(3,"h2"),n._uU(4,"Thank you. Your order is confirmed"),n.qZA(),n.TgZ(5,"p",2),n._uU(6,"Your order shipped yet, but this is to be expected as we are a real store!"),n.qZA(),n.YNc(7,w,2,1,"button",3),n.YNc(8,O,2,1,"button",3),n.qZA()),2&e&&(n.xp6(7),n.Q6J("ngIf",t.order),n.xp6(1),n.Q6J("ngIf",!t.order))},directives:[o.O5,m.rH],styles:[""]}),e})()}];let Q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[o.ez,m.Bz.forChild(I)],m.Bz]}),e})();var E=r(4466);let M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[o.ez,Q,E.m]]}),e})()}}]);