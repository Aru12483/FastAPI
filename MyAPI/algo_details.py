

from sqlalchemy import Boolean, Column, Integer, String
from db_handler import Base


class AlgoDetails(Base):

    __tablename__ = "algo_details"
    id = Column(Integer, primary_key=True, autoincrement=True, index=True, nullable=False)
    algo_id = Column(String(255), unique=True, index=True, nullable=False)
    algo_name = Column(String(255), index=True, nullable=False)
    algo_server_ip = Column(String(100), index=True, nullable=False)
    algo_server_port = Column(String(255), index=True, nullable=False)
    endpoint = Column(String(255), index=True, nullable=False)
    status = Column(String(255), index=True, nullable=False)
    hospital_auth_token = Column(String(255), index=True)
    hospital_token_valid_date = Column(String(255), index=True)
    algo_auth_token = Column(String(255), index=True)
    algo_auth_valid_date = Column(String(255), index=True)
    flag = Column(String(50), index=True)
    created_on = Column(String, index=True)
    updated_on = Column(String, index=True)
