from django.shortcuts import render

# Create your views here.
def home(request):
    name = 'Hello world'
    context ={
        'name': name
    }
    return render(request, 'interior/home.html', context)