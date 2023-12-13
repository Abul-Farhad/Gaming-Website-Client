from django.urls import re_path,path
from GamingClientApp import views
urlpatterns = [
    
    re_path(r'^gameapi$',views.gameingClientApi),
    re_path(r'^gameapi/([0-9]+)$',views.gameingClientApi),

    re_path(r'^cartapi$',views.cartItemApi),
    re_path(r'^cartapi/([0-9]+)$',views.cartItemApi),
    re_path(r'^cartapi/(?P<email>[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,})/$', views.cartItems),
    re_path(r'^getadmin$',views.adminInfo),
    re_path(r'^getadmin/(?P<email>[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,})/$', views.adminInfo),
]
