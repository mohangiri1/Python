---
layout: default
title: Euler
---

# Euler's Method for Solving Differential Equations

Euler's Method is a simple and straightforward numerical technique used to solve first-order ordinary differential equations (ODEs). This method is particularly useful for obtaining an approximate solution when an exact analytical solution is difficult or impossible to find.

## Overview of Euler's Method

Euler's Method is based on the idea of using the tangent line at a known point to estimate the value of the function at the next point. It uses the following iterative formula:

\[ y_{n+1} = y_n + h \cdot f(x_n, y_n) \]

where:
- \( y_{n+1} \) is the estimated value of the function at \( x_{n+1} \).
- \( y_n \) is the known value of the function at \( x_n \).
- \( h \) is the step size.
- \( f(x_n, y_n) \) is the value of the derivative at \( (x_n, y_n) \).

## Example

Consider the first-order differential equation:

\[ \frac{dy}{dx} = x + y \]

with the initial condition \( y(0) = 1 \).

### Implementation in Fortran

Below is a Fortran program that implements Euler's Method to solve the given differential equation.

#### Fortran Code

```fortran
program euler
  implicit none
  real(8) :: x, y, h, xf
  integer :: n, i

  ! Function prototype
  real(8) :: f
  real(8), intent(in) :: x, y

  ! Define the function f(x, y)
  contains
  function f(x, y)
    real(8) :: f
    real(8), intent(in) :: x, y
    f = x + y
  end function f

  ! Read input values
  print *, 'Enter the initial value of x:'
  read *, x
  print *, 'Enter the initial value of y:'
  read *, y
  print *, 'Enter the step size h:'
  read *, h
  print *, 'Enter the final value of x:'
  read *, xf

  ! Number of steps
  n = int((xf - x) / h)

  ! Euler's Method
  do i = 1, n
    y = y + h * f(x, y)
    x = x + h
  end do

  ! Output the result
  print *, 'Approximate solution at x =', x, 'is y =', y

end program euler
```

Watch the full tutorial video:
{% include youtube.html id="f1Vn6x1-6rI" %}


Link of the downloaded script file: [Examples Directory](https://github.com/mohangiri1/Fortran/tree/main/examples)

# Resources:
1. [http://calculuslab.deltacollege.edu/ODE/7-C-1/7-C-1-h-c.html](http://calculuslab.deltacollege.edu/ODE/7-C-1/7-C-1-h-c.html)
