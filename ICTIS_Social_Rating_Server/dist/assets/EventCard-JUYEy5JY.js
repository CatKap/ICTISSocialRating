import{_ as n}from"./1-u5AQWYhB.js";/* empty css                                                                  */import{_ as s}from"./_plugin-vue_export-helper-x3n3nnut.js";import{o,c as i,a,t as e,e as r,p as c,g as d}from"./index-qKZi2_3H.js";const l=t=>(c("data-v-2c921963"),t=t(),d(),t),_={class:"card"},g={class:"desc"},m={class:"text"},h={class:"bar"},v={class:"bar"},p={class:"bar"},u=["joined"],E=l(()=>a("img",{src:n,alt:""},null,-1)),S={__name:"EventCard",props:{ratingEvent:{name:String,description:String,startDate:String,location:String,ratingValue:Number,imgUrl:String},already_join:!1},setup(t){return(f,b)=>(o(),i("div",_,[a("div",g,[a("h2",null,"Мероприятие: "+e(t.ratingEvent.name),1),a("div",m,e(t.ratingEvent.description),1),a("h3",h,"Дата проведения: "+e(new Date(t.ratingEvent.startDate).toLocaleString()),1),a("h3",v,"Место проведения: "+e(t.ratingEvent.location),1),a("h2",p,[r(" Баллы: "+e(t.ratingEvent.ratingValue||0)+" ",1),a("button",{joined:t.already_join},e(t.already_join?"Участвую":"Участвововать"),9,u)])]),E]))}},I=s(S,[["__scopeId","data-v-2c921963"]]);export{I as E};
