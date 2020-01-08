import Handlebars from 'handlebars'
import accounting from 'accounting-js'

var template = `
<body>
  <main>
    TEST
  </main>`      

var compiledTemplate = Handlebars.compile(template)

var head = `<!DOCTYPE html>
	<html dir="ltr" lang="en">
	    <head>
		<meta charset="UTF-8">
		<title>ARBQ Communication Affidavit</title>
                <style>

body {
  font-family: "Times New Roman", Times, serif;
  height: 11in;
  width: 8.5in;
  padding: .25in;
  display: flex;
  flex-direction: column;
  font-size: 15px;
}

main {
  flex: 1;
}

p {
  margin: 3px 0;
}

.border {
  border: 1px solid black;
}

.title {
  text-align: center;
}

.title-main {
  margin: 0;
}

.title-sub {
  margin: 0;
}

.no-border {
  border: 0;
}

.margin-top-34 {
  margin-top: 34px;
}

.margin-top-30 {
  margin-top: 30px;
}

.margin-top-24 {
  margin-top: 24px;
}

.margin-top-18 {
  margin-top: 18px;
}

.margin-top-12 {
  margin-top: 12px;
}

.margin-top-6 {
  margin-top: 6px;
}

.margin-top-3 {
  margin-top: 3px;  
}

.uppercase {
  text-transform: uppercase;
}

.underline {
  text-decoration: underline;
}

.float-right {
  float: right;
  text-align: right;
}

.text-align-right {
  text-align: right;
}

.bold {
  font-weight: bold;
}

.span2 {
  grid-column: span 2;
}

.span3 {
  grid-column: span 3;
}

.span4 {
  grid-column: span 4;
}

.start2 {
  grid-column-start: 2;
}

.grid-top-outer {
  display: grid;
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: auto auto auto;
  text-align: left;
}

.grid-4-cols {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 245px; 
  text-align: left;
}

.grid-4-cols-2 {
  display: grid;
  grid-template-columns: 80px 130px 1fr 1fr; 
  text-align: left;
}

.grid-4-cols div {
  padding: 3px; 6px;
}

.grid-top-inner { 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 0 6px
}

.grid-title {
  font-weight: bold;
  grid-column: 1 / span 1;
}

.grid-title-exception {
  font-weight: bold;
  grid-column: 1 / span 2;
}

.grid-content {
  grid-column: 2 / span 3;
}


.grid-content-exception {
  grid-column: 3 / span 2;
}

.checkbox {
  display: inline-block;
  height: 17px;
  width: 17px;
  margin-bottom: -3px;
  margin-left: 6px;
  margin-right: 3px;
  border: 1px solid black;
}

.checkbox-lead {
  display: inline-block;
  height: 17px;
  width: 17px;
  margin-bottom: -3px;
  margin-right: 3px;
  border: 1px solid black;
}

.aside-left {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
}

.aside-right {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
}
                     
</style>
    </head>`

const tail = `</body></html>`

module.exports = (data) => {
	
   // Clean up data for printing	
   data.agent_id = [null, 'NULL'].includes(data.agent_id) ? " " :  data.agent_id
   data.agent_nm = [null, 'NULL'].includes(data.agent_nm) ? " " :  data.agent_nm
   data.market = accounting.formatMoney(data.market).slice(0, -3)
   data.BPPValue = accounting.formatMoney(data.BPPValue).slice(0, -3)
   data.assessed_val = accounting.formatMoney(data.assessed_val).slice(0, -3)
   data.deleted = data.prop_inactive_date == null ? " " : "Deleted"
   
   // Add date
   const date = new Date()
   data.date = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  
   console.log('data in template is', data)

   //console.log('data in decision sheet template is\n', JSON.stringify(data, undefined, 2))
   return head + compiledTemplate(data) + tail 
}


