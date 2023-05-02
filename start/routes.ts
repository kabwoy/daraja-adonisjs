/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import moment from moment;
import axios from axios
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'

const consumerKey = "Gj02F0Ecrui57F5lQ8i7Qchgf1u2nynZ"
const consumerSecret = "fMZOuKPFLcJWKU3J"
const stkPushUrl = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
Route.get('/', async () => {
  return { hello: 'world' }
})
Route.post('/stk', async ({}:HttpContextContract) => {

  const reqBody = {    
   "BusinessShortCode": "174379",    
   "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3",    
   "Timestamp":"20160216165627",    
   "TransactionType": "CustomerPayBillOnline",    
   "Amount": "1",    
   "PartyA":"254708374149",    
   "PartyB":"174379",    
   "PhoneNumber":"254708374149",    
   "CallBackURL": "https://mydomain.com/pat",    
   "AccountReference":"Test",    
   "TransactionDesc":"Test"
}
  return { hello: 'world' }
})
Route.post("/callback" , async({request, response}:HttpContextContract)=>{

  console.log(request.body());
  

})
