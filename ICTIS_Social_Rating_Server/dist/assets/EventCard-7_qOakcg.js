import{_ as n}from"./1-u5AQWYhB.js";/* empty css                                                                  */import{_ as o}from"./_plugin-vue_export-helper-x3n3nnut.js";import{o as c,c as i,a,t as e,e as r,p as d,g as l}from"./index-YRCxypDz.js";const s=t=>(d("data-v-49cc7037"),t=t(),l(),t),_={class:"card"},g={class:"desc"},m={class:"text"},h={class:"bar"},p={class:"bar"},v={class:"bar"},u=s(()=>a("button",null,"Учавствовать",-1)),E=s(()=>a("img",{src:n,alt:""},null,-1)),S={__name:"EventCard",props:{ratingEvent:{name:String,description:String,startDate:String,location:String,ratingValue:Number,imgUrl:String}},setup(t){return(b,f)=>(c(),i("div",_,[a("div",g,[a("h2",null,"Мероприятие: "+e(t.ratingEvent.name),1),a("div",m,e(t.ratingEvent.description),1),a("h3",h,"Дата проведения: "+e(new Date(t.ratingEvent.startDate).toLocaleString()),1),a("h3",p,"Место проведения: "+e(t.ratingEvent.location),1),a("h2",v,[r(" Баллы: "+e(t.ratingEvent.ratingValue||0)+" ",1),u])]),E]))}},B=o(S,[["__scopeId","data-v-49cc7037"]]);export{B as E};
