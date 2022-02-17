from django.shortcuts import render
from django.http import HttpResponse
from .models import User
from . import models




# Create your views here.
def signIn(request):
  
    return render(request, 'signIn.html') 


def signUp(request):
    return render(request, 'signUp.html')

def register(request):
    return render(request, 'register.html')

def home(request):
    # if request.method =='POST':
        userName = request.POST['userTwo']
        passWord = request.POST['passOne']
        dbUsername = User.objects.filter(username=userName).exists()
        dbPassword = User.objects.filter(password= passWord).exists()
        # print(userName, passWord)
        # print(dbUsername, dbPassword)
        
        if (dbUsername and dbPassword):
            return render(request,'home.html', {'username': userName})
            # return HttpResponse("sign in successful")
        else:
            return render(request, 'signIn.html', {'message': 'invalid credentials'})
        

# saving value in database
def insert(request):
    if request.method=='POST':
        
        credential = models.User(
        username=request.POST['userTwo'],
        password=request.POST['passOne'],
        email=request.POST['email'],
        firstName=request.POST['fname'],
        lastName=request.POST['lname'],
        phone=request.POST['phone'])
        credential.save()
        print(credential)
        return HttpResponse("data saved")
    


   
    
    
