from typing import List
from fastapi import Depends, FastAPI, HTTPException,Request
from sqlalchemy import delete,distinct,func
from sqlalchemy.orm import Session
import  algo_inference
import db_handler
from fastapi import Form
from companyData import monthly_count ,daily_count
import algo_inference, algo_details
import uvicorn 
from sqlalchemy import and_, or_, not_, extract
from db_handler import Session_Local
import algo_inference as algo_infrence
algo_inference.Base.metadata.create_all(bind=db_handler.db_engine)


from fastapi import Depends, FastAPI, Request
#from fastapi.security import OAuth2PasswordBearer

app = FastAPI()
def get_db():
    db = Session_Local
    try:
        yield db
    finally:
        db.close()


@app.post('/dashboard/api/v2/monthly_count')
async def post_basic_form(algo: str = Form(...), month: str = Form(None), year: str = Form(...)):
  succ = monthly_count(algo,year,month)
  return {"key": algo,"month": month, "data": succ}

@app.post('/dashboard/api/v2/daily_count')
async def post_basic_form(algo: str = Form(...), year: str = Form(...), month: str = Form(None), day: str = Form(None)):
    counter = daily_count(algo,year,month,day)
    return (counter)

if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=90)
