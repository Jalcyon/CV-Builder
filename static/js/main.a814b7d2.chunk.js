(this["webpackJsonpcv-builder"]=this["webpackJsonpcv-builder"]||[]).push([[0],{19:function(e,t,o){},26:function(e,t,o){"use strict";o.r(t);var r=o(3),s=o.n(r),a=o(14),l=o.n(a),n=(o(19),o(6)),c=o(7),i=o(9),u=o(8),d=o(2),b=o(5),m=o(4),j=o(0),h=function(e){Object(i.a)(o,e);var t=Object(u.a)(o);function o(e){var r;return Object(n.a)(this,o),(r=t.call(this,e)).form=function(){return Object(j.jsxs)("form",{onSubmit:r.handleSubmit,className:"grid grid-cols-2 shadow-xl border-2 border-blue-400",children:[Object(j.jsx)("label",{className:"text-right m-2",children:"Name"}),Object(j.jsx)("input",{htmlFor:"name",type:"text",defaultValue:r.state.name,className:"border m-2 border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300"}),Object(j.jsx)("label",{className:"text-right m-2",children:"Email"}),Object(j.jsx)("input",{htmlFor:"Email",type:"email",defaultValue:r.state.email,className:"border m-2 border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300"}),Object(j.jsx)("label",{className:"text-right m-2",children:"Phone Number"}),Object(j.jsx)("input",{htmlFor:"phone number",type:"text",defaultValue:r.state.phone,className:"border m-2 border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300"}),Object(j.jsx)("input",{className:"col-span-2 w-2/4 my-2 mx-auto rounded hover:bg-blue-400",type:"submit",value:"submit"})]})},r.info=function(){return Object(j.jsxs)("div",{className:"grid grid-cols-1 text-center shadow-xl border-2 border-blue-400 p-3",children:[Object(j.jsxs)("p",{className:"m-2",children:["Name: ",r.state.name]}),Object(j.jsxs)("p",{className:"m-2",children:["Email: ",r.state.email]}),Object(j.jsxs)("p",{className:"m-2",children:["Phone Number: ",r.state.phone]}),Object(j.jsx)(b.a,{icon:m.a,className:"absolute cursor-pointer",onClick:r.editHandler})]})},r.state={showForm:!1,name:"",email:"",phone:""},r.handleSubmit=r.handleSubmit.bind(Object(d.a)(r)),r.form=r.form.bind(Object(d.a)(r)),r.info=r.info.bind(Object(d.a)(r)),r.editHandler=r.editHandler.bind(Object(d.a)(r)),r}return Object(c.a)(o,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target.getElementsByTagName("input");console.log(t),this.setState({showForm:!1,name:t[0].value,email:t[1].value,phone:t[2].value})}},{key:"editHandler",value:function(){this.setState({showForm:!0})}},{key:"render",value:function(){var e;return e=this.state.showForm?this.form():this.info(),Object(j.jsxs)("div",{className:"mx-auto mb-4 w-2/4",children:[Object(j.jsx)("h2",{className:"bg-blue-400 text-center text-xl",children:"General Information"}),Object(j.jsx)("div",{children:e})]})}}]),o}(r.Component),p=o(11),x=function(e){Object(i.a)(o,e);var t=Object(u.a)(o);function o(e){var r;return Object(n.a)(this,o),(r=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=e.target.getElementsByTagName("input");console.log(t[0].value);var o={name:t[0].value,cert:t[1].value,completed:t[2].value,edit:!1};r.setState((function(e){return{education:[].concat(Object(p.a)(e.education),[o]),showForm:!1}}))},r.showForm=function(){r.setState({showForm:!0})},r.editSchool=function(e){var t=r.state.education,o=t[e];o.edit=!0,t.splice(e,1,o),console.log(o),r.setState({education:t})},r.addChangedSchool=function(e){e.preventDefault();var t=e.target.getElementsByTagName("input"),o=t[3].value,s={name:t[0].value,cert:t[1].value,completed:t[2].value,edit:!1},a=r.state.education;a.splice(o,1,s),r.setState({education:a})},r.deleteSchool=function(e){var t=r.state.education;t.splice(e,1),console.log("deleteSchool func"),console.log(e),r.setState({schools:t})},r.showForm=r.showForm.bind(Object(d.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(d.a)(r)),r.deleteSchool=r.deleteSchool.bind(Object(d.a)(r)),r.addChangedSchool=r.addChangedSchool.bind(Object(d.a)(r)),r.state={showForm:!1,education:[]},r}return Object(c.a)(o,[{key:"render",value:function(){var e,t=this,o=this.state.education.map((function(e,o){return e.edit?Object(j.jsxs)("form",{onSubmit:t.addChangedSchool,className:"grid grid-cols-2 shadow-lg border m-3 border-green-400",children:[Object(j.jsx)("label",{className:"text-right m-1",children:"School"}),Object(j.jsx)("input",{htmlFor:"school",type:"text",defaultValue:e.name,className:"border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"}),Object(j.jsx)("label",{className:"text-right m-1",children:"Certificate"}),Object(j.jsx)("input",{htmlFor:"cert",type:"text",defaultValue:e.cert,className:"border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"}),Object(j.jsx)("label",{className:"text-right m-1",children:"Completion Date"}),Object(j.jsx)("input",{htmlFor:"completed date",type:"text",defaultValue:e.completed,className:"border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"}),Object(j.jsx)("input",{type:"hidden",value:o}),Object(j.jsx)("input",{className:"col-span-2 w-2/4 my-2 mx-auto rounded hover:bg-blue-400",type:"submit",value:"submit"})]},o):Object(j.jsxs)("div",{className:"m-3 p-3 border border-blue-300 shadow-lg relative",children:[Object(j.jsxs)("p",{children:["School: ",e.name]}),Object(j.jsxs)("p",{children:["Certificate: ",e.cert]}),Object(j.jsxs)("p",{children:["Completion Date: ",e.completed]}),Object(j.jsx)(b.a,{icon:m.a,className:"absolute top-4 right-1 cursor-pointer",onClick:function(){return t.editSchool(o)}}),Object(j.jsx)(b.a,{icon:m.c,className:"absolute top-16 right-2 cursor-pointer",onClick:function(){return t.deleteSchool(o)}})]},o)}));return e=this.state.showForm?Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:"grid grid-cols-2 shadow-lg border m-3 border-green-400",children:[Object(j.jsx)("label",{className:"text-right m-1",children:"School"}),Object(j.jsx)("input",{htmlFor:"school",type:"text",defaultValue:this.state.name,className:"border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"}),Object(j.jsx)("label",{className:"text-right m-1",children:"Certificate"}),Object(j.jsx)("input",{htmlFor:"cert",type:"text",defaultValue:this.state.email,className:"border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"}),Object(j.jsx)("label",{className:"text-right m-1",children:"Completion Date"}),Object(j.jsx)("input",{htmlFor:"completed date",type:"text",defaultValue:this.state.phone,className:"border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"}),Object(j.jsx)("input",{className:"col-span-2 w-2/4 my-2 mx-auto rounded hover:bg-blue-400",type:"submit",value:"submit"})]}):Object(j.jsx)(b.a,{icon:m.b,className:"cursor-pointer mx-auto my-2",onClick:this.showForm}),Object(j.jsxs)("div",{className:"mx-auto mb-4 w-2/4",children:[Object(j.jsx)("h2",{className:"bg-blue-400 text-center text-xl",children:"Education"}),Object(j.jsxs)("div",{className:"shadow-xl border-2 border-blue-400 grid grid-cols-1 text-center relative",children:[o,e]})]})}}]),o}(r.Component),f=function(e){Object(i.a)(o,e);var t=Object(u.a)(o);function o(e){var r;return Object(n.a)(this,o),(r=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=e.target.getElementsByTagName("input"),o={company:t[0].value,title:t[1].value,duration:t[2].value,responsibilities:t[3].value,edit:!1};r.setState((function(e){return{jobs:[].concat(Object(p.a)(e.jobs),[o]),showForm:!1}}))},r.showForm=function(){r.setState({showForm:!0})},r.editSchool=function(e){var t=r.state.jobs,o=t[e];o.edit=!0,t.splice(e,1,o),console.log(o),r.setState({jobs:t})},r.addChangedJob=function(e){e.preventDefault();var t=e.target.getElementsByTagName("input"),o=t[4].value,s={company:t[0].value,title:t[1].value,duration:t[2].value,responsibilities:t[3].value,edit:!1},a=r.state.jobs;a.splice(o,1,s),r.setState({jobs:a})},r.deleteJob=function(e){var t=r.state.jobs;t.splice(e,1),console.log("deleteJob func"),console.log(e),r.setState({Jobs:t})},r.showForm=r.showForm.bind(Object(d.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(d.a)(r)),r.deleteJob=r.deleteJob.bind(Object(d.a)(r)),r.addChangedJob=r.addChangedJob.bind(Object(d.a)(r)),r.state={showForm:!1,jobs:[]},r}return Object(c.a)(o,[{key:"render",value:function(){var e,t=this,o=this.state.jobs.map((function(e,o){return e.edit?Object(j.jsxs)("form",{onSubmit:t.addChangedJob,className:"grid grid-cols-2 shadow-lg border m-3 border-green-400",children:[Object(j.jsx)("label",{className:"text-right m-1",children:"Company"}),Object(j.jsx)("input",{htmlFor:"company",type:"text",defaultValue:e.company,className:"border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"}),Object(j.jsx)("label",{className:"text-right m-1",children:"Title"}),Object(j.jsx)("input",{htmlFor:"title",type:"text",defaultValue:e.title,className:"border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"}),Object(j.jsx)("label",{className:"text-right m-1",children:"Duration"}),Object(j.jsx)("input",{htmlFor:"duration",type:"text",defaultValue:e.duration,className:"border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"}),Object(j.jsx)("label",{className:"text-right m-1",children:"Responsibilities"}),Object(j.jsx)("input",{htmlFor:"responsibilities",type:"text",defaultValue:e.responsibilities,className:"border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"}),Object(j.jsx)("input",{type:"hidden",value:o}),Object(j.jsx)("input",{className:"col-span-2 w-2/4 my-2 mx-auto rounded hover:bg-blue-400",type:"submit",value:"submit"})]},o):Object(j.jsxs)("div",{className:"m-3 p-3 border border-blue-300 shadow-lg relative",children:[Object(j.jsxs)("p",{children:["Company:  ",e.company]}),Object(j.jsxs)("p",{children:["Title:  ",e.title]}),Object(j.jsxs)("p",{children:["Duration:  ",e.duration]}),Object(j.jsxs)("p",{children:["Responsibilities:  ",e.responsibilities]}),Object(j.jsx)(b.a,{icon:m.a,className:"absolute top-4 right-1 cursor-pointer",onClick:function(){return t.editSchool(o)}}),Object(j.jsx)(b.a,{icon:m.c,className:"absolute top-16 right-2 cursor-pointer",onClick:function(){return t.deleteJob(o)}})]},o)}));return e=this.state.showForm?Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:"grid grid-cols-2 shadow-lg border m-3 border-green-400",children:[Object(j.jsx)("label",{className:"text-right m-1",children:"Company"}),Object(j.jsx)("input",{htmlFor:"school",type:"text",className:"border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"}),Object(j.jsx)("label",{className:"text-right m-1",children:"Title"}),Object(j.jsx)("input",{htmlFor:"cert",type:"text",className:"border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"}),Object(j.jsx)("label",{className:"text-right m-1",children:"Duration"}),Object(j.jsx)("input",{htmlFor:"completed date",type:"text",className:"border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"}),Object(j.jsx)("label",{className:"text-right m-1",children:"Responsibilities"}),Object(j.jsx)("input",{htmlFor:"responsibilities",type:"text",className:"border border-gray-500 rounded pl-1 focus:outline-none focus:ring focus:border-blue-300 m-1"}),Object(j.jsx)("input",{className:"col-span-2 w-2/4 my-2 mx-auto rounded hover:bg-blue-400",type:"submit",value:"submit"})]}):Object(j.jsx)(b.a,{icon:m.b,className:"cursor-pointer mx-auto my-2",onClick:this.showForm}),Object(j.jsxs)("div",{className:"mx-auto mb-4 w-2/4",children:[Object(j.jsx)("h2",{className:"bg-blue-400 text-center text-xl",children:"Experience"}),Object(j.jsxs)("div",{className:"shadow-xl border-2 border-blue-400 grid grid-cols-1 text-center relative",children:[o,e]})]})}}]),o}(r.Component),g=function(e){Object(i.a)(o,e);var t=Object(u.a)(o);function o(){return Object(n.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{}),Object(j.jsx)(x,{}),Object(j.jsx)(f,{})]})}}]),o}(r.Component);var O=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"bg-blue-300 text-center text-3xl font-bold shadow-xl mb-4 p-4",children:"CV Builder"}),Object(j.jsx)(g,{})]})};l.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.a814b7d2.chunk.js.map