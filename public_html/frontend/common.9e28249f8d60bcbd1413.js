"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[592],{7556:(a,u,r)=>{r.d(u,{e:()=>d});var o=r(1841),n=r(2340),h=r(7716);let d=(()=>{class i{constructor(t){this.http=t,this.url=n.N.api+"api/auth/user/",this.options={}}build_headers(){let t=(new o.WM).set("token",sessionStorage.getItem("token"));this.options={headers:t}}login(t,e){return this.http.post(this.url+"login",JSON.stringify({email:t,password:e})).toPromise()}register(t){return this.http.post(this.url+"register",JSON.stringify({item:t})).toPromise()}password_recovery(t){return this.http.get(this.url+"recovery?email="+t).toPromise()}upload_users(t){return this.build_headers(),this.http.post(this.url+"upload_users",JSON.stringify({items:t}),this.options).toPromise()}get_users(t,e){this.build_headers();let s={};return void 0!==t&&(s.output_model=t),void 0!==e&&(s.filter=e),this.http.post(this.url+"get_users",JSON.stringify(s),this.options).toPromise()}update_user(t,e){return this.build_headers(),this.http.put(this.url+"update_user",JSON.stringify({item_id:t,item:e}),this.options).toPromise()}delete_user(t){return this.build_headers(),this.http.delete(this.url+"delete_user?item_id="+t,this.options).toPromise()}lock_user(t){return this.build_headers(),this.http.get(this.url+"lock_user?item_id="+t,this.options).toPromise()}unlock_user(t){return this.build_headers(),this.http.get(this.url+"unlock_user?item_id="+t,this.options).toPromise()}reset_password_user(t){return this.build_headers(),this.http.get(this.url+"reset_password_user?item_id="+t,this.options).toPromise()}}return i.\u0275fac=function(t){return new(t||i)(h.LFG(o.eN))},i.\u0275prov=h.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}}]);