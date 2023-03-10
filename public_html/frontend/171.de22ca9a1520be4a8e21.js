"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[171],{2171:(A,p,n)=>{n.r(p),n.d(p,{ProfilePageModule:()=>P});var g=n(7556),c=n(8583),f=n(8259),h=n.n(f),e=n(7716),m=n(9866),d=n(4330),l=n(665);function _(t,a){if(1&t&&(e.TgZ(0,"div",19),e._UZ(1,"div",20),e.TgZ(2,"span",21),e._uU(3),e.qZA(),e._UZ(4,"div",20),e.qZA()),2&t){const r=a.$implicit;e.xp6(3),e.Oqu(r)}}function Z(t,a){1&t&&(e.TgZ(0,"div",22),e._UZ(1,"div",23),e.TgZ(2,"div",24),e._uU(3," Contrase\xf1a V\xe1lida "),e.qZA(),e._UZ(4,"div",23),e.qZA())}function w(t,a){if(1&t&&(e.TgZ(0,"tr"),e.TgZ(1,"td",16),e.YNc(2,_,5,1,"div",17),e.YNc(3,Z,5,0,"div",18),e.qZA(),e.qZA()),2&t){const r=e.oxw();e.xp6(2),e.Q6J("ngForOf",r.errores),e.xp6(1),e.Q6J("ngIf",0==r.errores.length)}}const v=[{path:"",component:(()=>{class t{constructor(r,s,o){this.spinner=r,this.authDataService=s,this.router=o,this.user={},this.password_confirm="",this.new_password="",this.password_min_length=8,this.password_caracteres_numericos=!0,this.password_caracteres_especiales=!0,this.password_caracteres_mayusculas=!0,this.password_caracteres_minusculas=!0,this.errores=[]}ngOnInit(){this.reset()}reset(){this.password_confirm="",this.new_password="",this.user=JSON.parse(sessionStorage.getItem("user"))}save_profile(){if(0!==this.errores.length)return;let r={fullname:this.user.fullname};""!=this.new_password&&(r.password=this.new_password),this.spinner.show(),this.authDataService.update_user(this.user.item_id,r).then(s=>{this.spinner.hide(),h().fire({title:"Actualizaci\xf3n de Datos",html:"Datos Guardados Correctamente, por favor inicie sesi\xf3n nuevamente.",icon:"success"}).then(o=>{sessionStorage.clear(),this.router.navigate(["/login"])})}).catch(s=>{this.spinner.hide(),console.log(s)})}validate_password(){this.errores=[],this.new_password!==this.password_confirm&&this.errores.push("Las contrase\xf1as no coinciden"),this.new_password.length<this.password_min_length&&this.errores.push("Longitud m\xednima de 8 caracteres");let r=!1,s=!1,o=!1,i=!1;this.new_password.split("").forEach(u=>{u.match("[0-9]")&&(r=!0),u.match("[^A-Za-z0-9]")&&(s=!0),u.match("[A-Z]")&&(o=!0),u.match("[a-z]")&&(i=!0)}),this.password_caracteres_numericos&&(r||this.errores.push("Debe contener al menos un n\xfamero")),this.password_caracteres_especiales&&(s||this.errores.push("Debe contener al menos un caracter especial")),this.password_caracteres_mayusculas&&(o||this.errores.push("Debe contener al menos una letra may\xfascula")),this.password_caracteres_minusculas&&(i||this.errores.push("Debe contener al menos una letra min\xfascula"))}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(m.t2),e.Y36(g.e),e.Y36(d.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-profile-page"]],decls:40,vars:6,consts:[[1,"row","p-2"],[1,"col-12","text-right"],[1,"col-12"],[1,"table","table-hover","mt-2"],[1,"col-6","text-right"],[1,"col-6","text-left"],[1,"form-control"],["type","text","placeholder","Nombre Completo",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-12","mt-5","text-center"],["type","password","placeholder","Nueva Contrase\xf1a",1,"form-control",3,"ngModel","ngModelChange","input"],["type","password","placeholder","Confirmar Contrase\xf1a",1,"form-control",3,"ngModel","ngModelChange","input"],[4,"ngIf"],[1,"col-12","text-center","mt-3"],["role","group","aria-label","Basic mixed styles example",1,"btn-group"],["type","button",1,"btn","btn-success",3,"disabled","click"],["type","button",1,"btn","btn-warning",3,"click"],["colspan","2",1,"text-center"],["class","row mt-1",4,"ngFor","ngForOf"],["class","row",4,"ngIf"],[1,"row","mt-1"],[1,"col-3"],[1,"badge","bg-danger","col-6","text-light"],[1,"row"],[1,"col-2"],["role","alert",1,"col-8","alert","alert-success"]],template:function(r,s){1&r&&(e.TgZ(0,"div",0),e.TgZ(1,"h1",1),e._uU(2," Edici\xf3n de Perfil "),e.qZA(),e.qZA(),e.TgZ(3,"div",0),e.TgZ(4,"div",2),e.TgZ(5,"table",3),e.TgZ(6,"tbody"),e.TgZ(7,"tr"),e.TgZ(8,"th",4),e._uU(9,"Correo Electr\xf3nico"),e.qZA(),e.TgZ(10,"td",5),e.TgZ(11,"label",6),e._uU(12),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"tr"),e.TgZ(14,"th",4),e._uU(15,"Nombre Completo"),e.qZA(),e.TgZ(16,"td",5),e.TgZ(17,"input",7),e.NdJ("ngModelChange",function(i){return s.user.fullname=i}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(18,"h3",8),e._uU(19,"Cambio de Contrase\xf1a"),e.qZA(),e.TgZ(20,"div",2),e.TgZ(21,"table",3),e.TgZ(22,"tbody"),e.TgZ(23,"tr"),e.TgZ(24,"th",4),e._uU(25,"Nueva Contrase\xf1a"),e.qZA(),e.TgZ(26,"td",5),e.TgZ(27,"input",9),e.NdJ("ngModelChange",function(i){return s.new_password=i})("input",function(){return s.validate_password()}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(28,"tr"),e.TgZ(29,"th",4),e._uU(30,"Confirmar Contrase\xf1a"),e.qZA(),e.TgZ(31,"td",5),e.TgZ(32,"input",10),e.NdJ("ngModelChange",function(i){return s.password_confirm=i})("input",function(){return s.validate_password()}),e.qZA(),e.qZA(),e.qZA(),e.YNc(33,w,4,2,"tr",11),e.qZA(),e.qZA(),e.qZA(),e.TgZ(34,"div",12),e.TgZ(35,"div",13),e.TgZ(36,"button",14),e.NdJ("click",function(){return s.save_profile()}),e._uU(37,"Guardar"),e.qZA(),e.TgZ(38,"button",15),e.NdJ("click",function(){return s.reset()}),e._uU(39,"Cancelar"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&r&&(e.xp6(12),e.Oqu(s.user.email),e.xp6(5),e.Q6J("ngModel",s.user.fullname),e.xp6(10),e.Q6J("ngModel",s.new_password),e.xp6(5),e.Q6J("ngModel",s.password_confirm),e.xp6(1),e.Q6J("ngIf",""!==s.new_password),e.xp6(3),e.Q6J("disabled",0!==s.errores.length))},directives:[l.Fj,l.JJ,l.On,c.O5,c.sg],styles:[""]}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.Bz.forChild(v)],d.Bz]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[g.e],imports:[[c.ez,T,l.u5]]}),t})()}}]);