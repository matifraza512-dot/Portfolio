from django.urls import path
from . import views

urlpatterns = [
    path('contact/', views.contact_view),
    path('contact/list/', views.contact_list),
    path('projects/', views.project_list),
    path('posts/', views.post_list),
    path('posts/<int:pk>/', views.post_detail),
]