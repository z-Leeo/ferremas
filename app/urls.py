from django.urls import path
from .views import home, categoria, login

urlpatterns = [
    path('', home , name="home"),
    path('categoria/', categoria, name="categoria"),
    path('login/',  login, name="login")
]