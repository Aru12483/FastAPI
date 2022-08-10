
from itertools import count
from operator import and_
from sre_constants import SUCCESS
from typing import List
from fastapi import Depends, FastAPI, HTTPException,Request
from sqlalchemy import delete,distinct,func
from sqlalchemy.orm import Session
import crud, algo_inference, schema
import db_handler
from fastapi import Form
import algo_inference, algo_details
import uvicorn 
from sqlalchemy import and_, or_, not_, extract
from db_handler import Session_Local
import algo_inference as algo_infrence
algo_inference.Base.metadata.create_all(bind=db_handler.db_engine)

from fastapi import Depends, FastAPI, Request
from fastapi.security import OAuth2PasswordBearer

app = FastAPI()
def get_db():
    db = Session_Local
    try:
        yield db
    finally:
        db.close()


@app.get('/dashboard/api/v2/instancedetails')
async def ip_details ():
    db = db_handler.Session_Local()
    result = db.query(algo_inference.Details.send_ip,func.count(algo_inference.Details.send_ip)).distinct().all() 
    print(result)
    return result 

@app.post('/api/v2/companyData/')
async def monthly_count (algo: str = Form(None)):
  print(algo)
  db = db_handler.Session_Local() 
  all = db.query(algo_details.AlgoDetails).distinct().all() 
  month = [0,0,0,0,0,0,0,0,0,0,0,0]                                                                                             
  names = []
  #not_ = 0
  query = db.query(algo_details.AlgoDetails.status,func.count(algo_details.AlgoDetails.status)).all()
  # algo_details.AlgoDetails.algo_name,
  # algo_details.AlgoDetails.algo_name).filter((extract('month', algo_details.AlgoDetails.created_on) == month)
  #  ).group_by(algo_details.AlgoDetails.algo_name).all()
  # print(query)
  # return query

  all_ = db.query(algo_infrence.Details.created_on,
  algo_details.AlgoDetails.algo_name)
  func.count(func.month(algo_infrence.Details.created_on),
  func.count(func.year(algo_infrence.Details.created_on)),
  algo_infrence.Details.updated_on).join(algo_details.AlgoDetails,
  algo_infrence.Details.algo_id == algo_details.AlgoDetails.algo_id
  ).filter(and_((algo_details.AlgoDetails.algo_id == algo))
  ).group_by(func.month(algo_infrence.Details.created_on)).all()

  print({"All algorithms" : "all algorithms","count " : query})

  for i,j in all_:
    month.append(i)
    names.append(j)
    return({"key" : month.i, "count" : names.j}) 



@app.get('/api/v2/companyData')
async def month(request : Request):
    return [  {
    "key": "algorithms",
    "label": "All Algorithms",
    "value": 3,
    "list": [
      {
        "key": "vindr_v2",
        "label": "Vindr Mammo",
        "data": [1, 2, 3, 4, 5],
        "borderColor": 'rgba(255, 255, 99, 0.4)'
      },
      {
        "key": "vindr-spinexr",
        "label": "Spine XR",
        "data": [1, 1, 3, 2, 5],
        "borderColor": 'rgba(255, 55, 99, 0.4)'
      },
      {
        "key": "vindr-brainct",
        "label": "VinDr-BrainCT",
        "data": [2, 4, 1, 4, 5.4],
        "borderColor": 'rgba(25, 255, 199, 0.2)'
      }
    ]
  }]
  
if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=90)
