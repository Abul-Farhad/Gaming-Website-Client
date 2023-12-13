from django.urls import re_path,path
from EmployeeApp import views

urlpatterns = [
    # path('department/', views.departmentApi)
    re_path(r'^department$',views.departmentApi),
    re_path(r'^department/([0-9]+)$',views.departmentApi)
]
