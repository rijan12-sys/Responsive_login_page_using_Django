from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length = 64)
    password = models.CharField (max_length = 64)
    firstName = models.CharField(max_length = 64, null=True)
    lastName = models.CharField(max_length = 64, null = True)
    email = models.EmailField(max_length = 64, null = True)
    phone = models.IntegerField(null = True)
# database
    
    
    


    
