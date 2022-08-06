from typing import List, Union
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/discounts")
async def discounts():
    return {"discount": 100}

@app.get("/name")
async def discounts():
    return {"name": "WHAT THE"}

@app.get("/names")
async def discounts():
    names = Names()
    names.Names = [Name(**{"name": "Apple"}), Name(**{"name": "Banana"}), Name(**{"name": "Carrot"})]
    return names

class Item(BaseModel):
    name: str
    description: Union[str, None] = None
    price: float
    discount: Union[float, None] = None

@app.get("/items/")
async def root(item: Item):

    return item

class Name(BaseModel):
    name: str



class Names(BaseModel):
    Names: List[Name] = None