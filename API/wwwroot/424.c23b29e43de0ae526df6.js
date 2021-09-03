(self.webpackChunkclient=self.webpackChunkclient||[]).push([[424],{9424:(t,e,r)=>{"use strict";r.r(e),r.d(e,{AccountModule:()=>J});var n=r(8583),i=r(15),o=r(665),s=r(3018),l=r(4878),a=r(4015);let u=(()=>{class t{constructor(t,e,r){this.accountService=t,this.router=e,this.activatedRoute=r}ngOnInit(){this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop",this.createLoginForm()}createLoginForm(){this.loginForm=new o.cw({email:new o.NI("",[o.kI.required,o.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]),password:new o.NI("",o.kI.required)})}onSubmit(){this.accountService.login(this.loginForm.value).subscribe(()=>{this.router.navigateByUrl(this.returnUrl)},t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(l.B),s.Y36(i.F0),s.Y36(i.gz))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-login"]],decls:10,vars:5,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal",2,"color","black"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block",3,"disabled"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"form",2),s.NdJ("ngSubmit",function(){return e.onSubmit()}),s.TgZ(3,"div",3),s.TgZ(4,"h1",4),s._uU(5,"Login"),s.qZA(),s.qZA(),s._UZ(6,"app-text-input",5),s._UZ(7,"app-text-input",6),s.TgZ(8,"button",7),s._uU(9,"Sign in"),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(2),s.Q6J("formGroup",e.loginForm),s.xp6(4),s.Q6J("label","Email Address"),s.xp6(1),s.Q6J("label","Password")("type","password"),s.xp6(1),s.Q6J("disabled",e.loginForm.invalid))},directives:[o._Y,o.JL,o.sg,a.t,o.JJ,o.u],styles:[""]}),t})();var c=r(7574),p=r(3637),m=r(9796);function g(t){return!(0,m.k)(t)&&t-parseFloat(t)+1>=0}var d=r(4869);function b(t){const{index:e,period:r,subscriber:n}=t;if(n.next(e),!n.closed){if(-1===r)return n.complete();t.index=e+1,this.schedule(t,r)}}var f=r(5917),h=r(3190),Z=r(8002);function v(t,e){if(1&t&&(s.TgZ(0,"li",12),s._uU(1),s.qZA()),2&t){const t=e.$implicit;s.xp6(1),s.Oqu(t)}}function x(t,e){if(1&t&&(s.TgZ(0,"ul",10),s.YNc(1,v,2,1,"li",11),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngForOf",t.errors)}}const w=[{path:"login",component:u},{path:"register",component:(()=>{class t{constructor(t,e,r){this.fb=t,this.accountService=e,this.router=r}ngOnInit(){this.createRegisterForm()}createRegisterForm(){this.registerForm=this.fb.group({displayName:[null,[o.kI.required]],email:[null,[o.kI.required,o.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")],[this.validateEmailNotTaken()]],password:[null,[o.kI.required]]})}onSubmit(){this.accountService.register(this.registerForm.value).subscribe(t=>{this.router.navigateByUrl("/shop")},t=>{console.log(t),t.errors&&(this.errors=t.errors)})}validateEmailNotTaken(){return t=>function(t=0,e,r){let n=-1;return g(e)?n=Number(e)<1?1:Number(e):(0,d.K)(e)&&(r=e),(0,d.K)(r)||(r=p.P),new c.y(e=>{const i=g(t)?t:+t-r.now();return r.schedule(b,i,{index:0,period:n,subscriber:e})})}(500).pipe((0,h.w)(()=>t.value?this.accountService.checkEmailExists(t.value).pipe((0,Z.U)(t=>t?{emailExists:!0}:null)):(0,f.of)(null)))}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(o.qu),s.Y36(l.B),s.Y36(i.F0))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-register"]],decls:12,vars:6,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal",2,"color","black"],["class","text-danger list-unstyled",4,"ngIf"],["formControlName","displayName",3,"label"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block"],[1,"text-danger","list-unstyled"],["style","font-size: 13px;",4,"ngFor","ngForOf"],[2,"font-size","13px"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"form",2),s.NdJ("ngSubmit",function(){return e.onSubmit()}),s.TgZ(3,"div",3),s.TgZ(4,"h1",4),s._uU(5,"Register"),s.qZA(),s.qZA(),s.YNc(6,x,2,1,"ul",5),s._UZ(7,"app-text-input",6),s._UZ(8,"app-text-input",7),s._UZ(9,"app-text-input",8),s.TgZ(10,"button",9),s._uU(11,"Sign in"),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(2),s.Q6J("formGroup",e.registerForm),s.xp6(4),s.Q6J("ngIf",e.errors),s.xp6(1),s.Q6J("label","Display Name"),s.xp6(1),s.Q6J("label","Email Address"),s.xp6(1),s.Q6J("label","Password")("type","password"))},directives:[o._Y,o.JL,o.sg,n.O5,a.t,o.JJ,o.u,n.sg],styles:[""]}),t})()}];let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[i.Bz.forChild(w)],i.Bz]}),t})();var q=r(4466);let J=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.ez,y,q.m]]}),t})()}}]);