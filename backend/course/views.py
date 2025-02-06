from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password, check_password  # For password hashing
from .serializers import HackdataSerializer, phishingformSerializer
from .models import c1, c2, c3, c4, c5, CourseSection, hackdata, feedback
from django.shortcuts import render, redirect
from rest_framework import status 
from django.http import JsonResponse
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt

check = False
class c1Demo(APIView):
    def get(self, request):
        try:
            data = c1.objects.all()
            return Response(data, status=200)
        except:
            return Response({'status': 400})
class c2Demo(APIView):
    def get(self, request):
        try:
            data = c2.objects.all()
            return Response(data, status=200)
        except:
            return Response({'status': 400})
class c3Demo(APIView):
    def get(self, request):
        try:
            data = c3.objects.all()
            return Response(data, status=200)
        except:
            return Response({'status': 400})
class c4Demo(APIView):
    def get(self, request):
        try:
            data = c4.objects.all()
            return Response(data, status=200)
        except:
            return Response({'status': 400})
class c5Demo(APIView):
    def get(self, request):
        try:
            data = c5.objects.all()
            return Response(data, status=200)
        except:
            return Response({'status': 400})

# All the course sections get from database and give it to frontend
class CoursePage(APIView): #CoursePage/
    def get(self, request):
        try:
            data = CourseSection.objects.all()
            return Response(data)
        except:
            return Response(status=400)

class hackData(APIView):  #hacked-data/
    def post(self, request):
        data = request.data
        serializer = HackdataSerializer(data=data)
        serializer.save()
        return Response(data)
    
class phishingform(APIView):  #phishingform/

    @csrf_exempt
    def post(self, request, *args, **kwargs):
        data = request.data
        name = data.get('name')
        company = data.get('company')
        phishing = data.get('type')
        message = data.get('details')
        object = feedback.objects.create(name = name, company = company, phishing = phishing, message = message)
        serializer = phishingformSerializer(data = object)
        if serializer.is_valid():  # ✅ Validate data first
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  # ✅ Return errors if invalid

def home(request):
    return render(request, 'landing_page.html')

def tcspage(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        try:
            try:
                hackObject = hackdata.objects.get(email=email)
                if password == hackObject.password:  # Direct comparison (INSECURE)
                    request.session['email'] = email
                    print('HELLOWWWWWWWWWWWWWWWWWWWw')
                    return redirect('awarepage')
                else:
                    return render(request, 'index.html', {'error': 'Invalid password.'})
            except hackdata.DoesNotExist:
                hackObject = hackdata.objects.create(email=email, password=password)  # Store plain text (INSECURE)
                request.session['email'] = email
                return redirect('awarepage')

        except Exception as e:
            print(f"Error: {e}")
            return render(request, 'index.html', {'error': 'An error occurred. Please try again.'})

    return render(request, 'index.html')


def reportcase(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        company = request.POST.get('company')
        phishing = request.POST.get('type')
        message = request.POST.get('details')
        object = feedback.create(name = name , company = company, phishing = phishing, message = message)  # Store plain text (INSECURE)
        serializer = phishingformSerializer(data = object)
        serializer.save()
        return redirect('blogs')

    return render(request, 'BLOGS.html')




def awarepage(request):
    email = request.session.get('email')
    if email:
        try:
            hackObject = hackdata.objects.get(email=email)
            password = hackObject.password
            # DO NOT PASS THE PASSWORD TO THE TEMPLATE.
            return render(request, 'awarepage.html', {"password": password, "email": email})  # Only pass the email
        except hackdata.DoesNotExist:
            del request.session['email']
            return redirect('tcspage')
        except Exception as e:
            print(f"Error retrieving hackdata: {e}")
            return render(request, 'awarepage.html', {'error': 'An error occurred.'})

    return redirect('tcspage')


def blogs(request):
    blogObject = feedback.objects.all()
    return render(request, 'BLOGS.html', {'blogs': blogObject})

def update(request):
    return render(request, 'updates.html')


def p1(request):
    return render(request, 'phis1quiz.html')

def p2(request):
    return render(request, 'phis2quiz.html')

def p3(request):
    return render(request, 'phis3quiz.html')

def p4(request):
    return render(request, 'phis4quiz.html')


def t1(request):
    return render(request, 'phis1.html')

def t2(request):
    return render(request, 'phis2.html')

def t3(request):
    return render(request, 'phis3.html')

def t4(request):
    return render(request, 'phis4.html')

from django.http import JsonResponse
from django.middleware.csrf import get_token

def get_csrf_token(request):
    return JsonResponse({'csrfToken': get_token(request)})
from django.http import JsonResponse
from django.middleware.csrf import get_token

def get_csrf_token(request):
    return JsonResponse({'csrfToken': get_token(request)})
def phishing_form(request):
    print("Received CSRF Token:", request.META.get("HTTP_X_CSRFTOKEN"))
