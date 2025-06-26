
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Calendar as CalendarIcon, Save, Plus, Trash2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface TimeSlot {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

const BuddyAvailability = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [isGenerallyAvailable, setIsGenerallyAvailable] = useState(true);
  const [weeklySchedule, setWeeklySchedule] = useState<TimeSlot[]>([
    { id: '1', day: 'Monday', startTime: '09:00', endTime: '17:00', isAvailable: true },
    { id: '2', day: 'Tuesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
    { id: '3', day: 'Wednesday', startTime: '09:00', endTime: '17:00', isAvailable: true },
    { id: '4', day: 'Thursday', startTime: '09:00', endTime: '17:00', isAvailable: true },
    { id: '5', day: 'Friday', startTime: '09:00', endTime: '17:00', isAvailable: true },
    { id: '6', day: 'Saturday', startTime: '10:00', endTime: '14:00', isAvailable: false },
    { id: '7', day: 'Sunday', startTime: '10:00', endTime: '14:00', isAvailable: false },
  ]);
  const [specificDates, setSpecificDates] = useState<Date[]>([]);
  const { user } = useAuth();
  const { toast } = useToast();

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timeOptions = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, '0');
    return `${hour}:00`;
  });

  const handleScheduleChange = (id: string, field: keyof TimeSlot, value: any) => {
    setWeeklySchedule(prev => 
      prev.map(slot => 
        slot.id === id ? { ...slot, [field]: value } : slot
      )
    );
  };

  const addTimeSlot = (day: string) => {
    const newSlot: TimeSlot = {
      id: Date.now().toString(),
      day,
      startTime: '09:00',
      endTime: '17:00',
      isAvailable: true
    };
    setWeeklySchedule(prev => [...prev, newSlot]);
  };

  const removeTimeSlot = (id: string) => {
    setWeeklySchedule(prev => prev.filter(slot => slot.id !== id));
  };

  const handleSaveAvailability = async () => {
    // Here you would typically save to your database
    toast({
      title: "Availability Updated",
      description: "Your availability schedule has been saved successfully.",
    });
  };

  const toggleSpecificDate = (date: Date) => {
    setSpecificDates(prev => {
      const dateExists = prev.some(d => d.toDateString() === date.toDateString());
      if (dateExists) {
        return prev.filter(d => d.toDateString() !== date.toDateString());
      } else {
        return [...prev, date];
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📅 Availability Management
          </h1>
          <p className="text-xl text-gray-600">
            Set your availability to help newcomers know when you're free to assist
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* General Availability */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="text-primary" />
                General Availability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="general-availability" className="text-base">
                  Currently Available for New Requests
                </Label>
                <Switch
                  id="general-availability"
                  checked={isGenerallyAvailable}
                  onCheckedChange={setIsGenerallyAvailable}
                />
              </div>
              
              <div className={`p-4 rounded-lg ${isGenerallyAvailable ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${isGenerallyAvailable ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="font-medium">
                    {isGenerallyAvailable ? 'Available' : 'Unavailable'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  {isGenerallyAvailable 
                    ? 'You will receive new buddy requests and messages'
                    : 'New requests will be paused, but existing connections remain active'
                  }
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Weekly Schedule</h3>
                {days.map(day => {
                  const daySlots = weeklySchedule.filter(slot => slot.day === day);
                  return (
                    <div key={day} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium">{day}</h4>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => addTimeSlot(day)}
                        >
                          <Plus size={16} className="mr-1" />
                          Add Time
                        </Button>
                      </div>
                      
                      {daySlots.length === 0 ? (
                        <p className="text-gray-500 text-sm">No availability set</p>
                      ) : (
                        <div className="space-y-2">
                          {daySlots.map(slot => (
                            <div key={slot.id} className="flex items-center gap-3">
                              <Switch
                                checked={slot.isAvailable}
                                onCheckedChange={(checked) => 
                                  handleScheduleChange(slot.id, 'isAvailable', checked)
                                }
                              />
                              
                              <Select
                                value={slot.startTime}
                                onValueChange={(value) => 
                                  handleScheduleChange(slot.id, 'startTime', value)
                                }
                              >
                                <SelectTrigger className="w-24">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {timeOptions.map(time => (
                                    <SelectItem key={time} value={time}>
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              
                              <span className="text-sm text-gray-500">to</span>
                              
                              <Select
                                value={slot.endTime}
                                onValueChange={(value) => 
                                  handleScheduleChange(slot.id, 'endTime', value)
                                }
                              >
                                <SelectTrigger className="w-24">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  {timeOptions.map(time => (
                                    <SelectItem key={time} value={time}>
                                      {time}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeTimeSlot(slot.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 size={16} />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Calendar View */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="text-primary" />
                Specific Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Mark specific dates when your availability differs from your regular schedule
              </p>
              
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border mx-auto"
                modifiers={{
                  unavailable: specificDates
                }}
                modifiersStyles={{
                  unavailable: { backgroundColor: '#fee2e2', color: '#dc2626' }
                }}
              />
              
              {selectedDate && (
                <div className="space-y-3">
                  <h4 className="font-medium">
                    {selectedDate.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </h4>
                  
                  <Button
                    variant={specificDates.some(d => d.toDateString() === selectedDate.toDateString()) ? "destructive" : "outline"}
                    onClick={() => toggleSpecificDate(selectedDate)}
                    className="w-full"
                  >
                    {specificDates.some(d => d.toDateString() === selectedDate.toDateString())
                      ? 'Mark as Available'
                      : 'Mark as Unavailable'
                    }
                  </Button>
                </div>
              )}

              {specificDates.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Unavailable Dates:</h4>
                  <div className="space-y-1">
                    {specificDates.map((date, index) => (
                      <Badge key={index} variant="destructive" className="text-xs">
                        {date.toLocaleDateString()}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Save Button */}
        <div className="mt-8 text-center">
          <Button 
            onClick={handleSaveAvailability}
            className="ghana-gradient px-8 py-3 text-lg"
          >
            <Save className="mr-2" />
            Save Availability Settings
          </Button>
        </div>

        {/* Tips */}
        <Card className="shadow-lg mt-8">
          <CardHeader>
            <CardTitle>Availability Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-800">💡 Best Practices</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Update your availability regularly</li>
                  <li>• Set realistic time slots you can commit to</li>
                  <li>• Consider time zones of people you help</li>
                  <li>• Mark holidays and vacation days in advance</li>
                  <li>• Allow buffer time between sessions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-800">⏰ Response Time Impact</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Clear availability improves your rating</li>
                  <li>• Consistent schedule builds trust</li>
                  <li>• Quick responses during available hours help more people</li>
                  <li>• Setting unavailable prevents disappointment</li>
                  <li>• Regular updates show professionalism</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuddyAvailability;
