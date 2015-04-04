from django.conf.urls import patterns, url
from main import views

urlpatterns = [
   url(r'^$', views.index),
   url(r'^addTask$', views.addTask),
   url(r'^deleteTask', views.deleteTask),
   url(r'^incProgress', views.incProgress),
   url(r'^resetProgress', views.resetProgress),
   url(r'^semantic$', views.semantic_index),
]
