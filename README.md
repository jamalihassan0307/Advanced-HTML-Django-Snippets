# Django HTML Snippets for VS Code

A collection of useful Django template and Python snippets for Visual Studio Code. These snippets are designed to speed up Django development by providing commonly used code patterns.

## Features

- Django template tags and filters
- Django Python code (views, models, forms, etc.)
- Bootstrap integration
- Form handling
- Authentication templates
- Common UI patterns

## Installation

1. Install through VS Code extensions
2. Search for `Django HTML Snippets`
3. Install and reload VS Code

## Available Snippets

### Django Template Tags (`ad` prefix)

| Prefix | Description |
|--------|-------------|
| `adblock` | Django template block |
| `adstatic` | Django static file reference |
| `adfor` | Django for loop template tag |
| `adif` | Django if-else template tag |
| `adinclude` | Django include template tag |
| `adurl` | Django URL template tag |
| `adextends` | Django extends template tag |
| `adcsrf` | Django CSRF token tag |
| `adload` | Django load template tag |
| `adcomment` | Django comment tag |
| `adwith` | Django with template tag |
| `adfilter` | Django filter syntax |
| `adfilters` | Common Django template filters loading |
| `adform` | Form template with crispy forms |
| `admessages` | Messages framework template |
| `adpagination` | Bootstrap pagination template |
| `adnav` | Bootstrap navbar with authentication |

### Django Python Code (`adp` prefix)

| Prefix | Description |
|--------|-------------|
| `adpview` | Django view function |
| `adpmodel` | Django model class |
| `adpform` | Django form class |
| `adpadmin` | Django admin class |
| `adpurls` | Django URLs configuration |
| `adpclass` | Class-based view with login required |
| `adpapi` | REST framework ViewSet |
| `adpmiddleware` | Custom middleware class |
| `adpsignals` | Model signals |
| `adpcommand` | Management command |
| `adpauthviews` | Authentication views |
| `adptests` | Test class with common test cases |

## Usage Examples

### Template Tags

```html
# Block Tag
adblock⇥
{% block content %}
    
{% endblock %}

# For Loop
adfor⇥
{% for item in list %}
    
{% endfor %}

# If Statement
adif⇥
{% if condition %}
    
{% else %}
    
{% endif %}

# Form with CSRF
adform⇥
<form method="post" class="form">
    {% csrf_token %}
    {{ form|crispy }}
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

### Python Code

```python
# View Function
adpview⇥
from django.shortcuts import render, HttpResponse
from django.views.generic import TemplateView

def view_name(request):
    return render(request, 'template.html', {
        'context_variable': value
    })

# Model Class
adpmodel⇥
from django.db import models

class ModelName(models.Model):
    field_name = models.CharField(max_length=100)

    def __str__(self):
        return self.field_name

    class Meta:
        verbose_name = 'Model Name'
        verbose_name_plural = 'Model Names'

# Class-Based View
adpclass⇥
from django.views.generic import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Model

class ViewName(LoginRequiredMixin, ListView):
    model = Model
    template_name = 'template.html'
    context_object_name = 'objects'
    paginate_by = 10
```

## Features

### Bootstrap Integration
- Navbar with authentication
- Pagination
- Forms with crispy-forms
- Responsive components

### Authentication
- Login/Logout views
- Password change/reset views
- User registration
- Profile templates

### REST Framework Support
- ViewSets
- Serializers
- API views
- Authentication

### Testing
- TestCase setup
- Common test patterns
- URL testing
- Template testing

## Requirements

- Visual Studio Code
- Django project
- Python environment
- (Optional) django-crispy-forms for form templates
- (Optional) Django REST framework for API snippets
- (Optional) Bootstrap 5 for UI components

## Contributing

Feel free to submit issues and enhancement requests!

## License

This extension is licensed under the MIT License.
