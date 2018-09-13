import RPi.GPIO as GPIO
import time
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(11, GPIO.OUT)
p = GPIO.PWM(11, 50)
p.start(7.5)
p.ChangeDutyCycle(9) # Turn to 0 degree
time.sleep(1) #sleep 1 second
p.stop()
GPIO.cleanup()
print ("unlocked")