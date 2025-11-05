"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  Bell,
  Download,
  MessageCircle,
  User,
  MapPin,
  CalendarClock,
  FileText,
  Phone,
  CreditCard,
  Dot,
  AngryIcon,
  ScanFaceIcon,
  FlagTriangleRightIcon,
  StarIcon,
  Loader2,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchApi } from "@/lib/api";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

export default function ClientComponent({ token }: any) {
  const [user, setUser]: any = useState();
  const [feedbackType, setFeedbackType] = useState("review");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isComplaintBoxOpen, setIsComplaintBoxOpen] = useState(false);
 const [form, setForm] = React.useState({
    firstName:  "",
    lastName:  "",
    phone:  "",
    cnnic:  "",
    dateOfBirth:  "",
    bloodGroup:  "",
    address:  "",
    city:  "",
    state:  "",
    postalCode:  0,
    fatherName:  "",
    fatherPhone:  "",
    fatherOccupation:  "",
  });
  const [loadingFetchingMe, setLoadingFetchingMe] = useState(true);
  const [savingPersonalInfoLoading,setSavingPersonalInfoLoading]=useState(false)
  useEffect(() => {
    const fetchMe = async () => {
      try {
        setLoadingFetchingMe(true);

        let res = await fetchApi({
          url: "/api/students/me",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        let data = await res.json();
        setUser(data);
       
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingFetchingMe(false);
      }
    };
    fetchMe();
  }, []);

 

  if (loadingFetchingMe) {
    return (
      <div className="flex w-full  space-x-2  items-center justify-center min-h-[50vh]">
        <Loader2 className="w-8 h-8 animate-spin text-accent" />
        <p className="text-sm text-primary font-semibold">Loading...</p>
      </div>
    );
  }

  if (!user || user == undefined) {
    return (
      <div className="flex w-full  space-x-2  items-center justify-center min-h-[50vh]">
        <p className="text-sm text-primary font-semibold">No user found</p>
      </div>
    );
  }

  const fullName = `${user.firstName} ${user.lastName}`;
  const totalInvoices = user?.invoices?.reduce(
    (t: any, i: any) => t + i.amount,
    0
  );
  const totalPaid = user?.payments?.reduce((t: any, p: any) => t + p.amount, 0);
  const totalDue = totalInvoices - totalPaid;
  const stayDays = Math.max(
    0,
    Math.floor(
      (new Date().getTime() - new Date(user.checkInDate).getTime()) /
        (1000 * 60 * 60 * 24)
    )
  );
  const stayProgress = Math.min(100, Math.round((stayDays / 365) * 100)); // mock: percent of a year

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const locked = {
    email: true,
    cnic: true,
    fatherCnic: true,
    gender: true,
  };

  function RatingStars({ rating }: { rating: number }) {
    return (
      <>
        {Array.from({ length: rating }).map((_, i) => (
          <StarIcon key={i} className="w-4 h-4 text-accent" />
        ))}
      </>
    );
  }

  const handleUpdatePersonalInfo = async() =>{
    try {
        setSavingPersonalInfoLoading(true)
        const res = await fetchApi({
            url:"/api/students/me",
            body:JSON.stringify(form),
            method:"PUT",
            headers:{
                Authorization: `Bearer ${token}`,
            }
        })

        if(res.ok){
            location.reload()
        }
    } catch (error) {
        
    }
    finally{
        setSavingPersonalInfoLoading(false)
    }
  }

  return (
    <div className=" py-10 px-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, {fullName}</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Student dashboard — quick overview of your stay and payments
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="flex items-center gap-2">
            <Bell className="w-4 h-4" /> Notifications
          </Button>
          <Button variant="secondary" className="flex items-center gap-2">
            <Download className="w-4 h-4" /> Export
          </Button>
        </div>
      </div>

      {/* Top row: Profile + Summary Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Personal & guardian information</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="" />
                <AvatarFallback>
                  <User />
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="text-lg font-semibold">{fullName}</div>
                <div className="text-sm">
                  {user.email} • {user.phone}
                </div>
                <div className="mt-2 text-xs inline-flex items-center gap-2 py-1 px-2 rounded-full bg-green-50 text-green-700">
                  Status: {user.status}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <strong>CNIC</strong>
                <div className="text-muted-foreground">{user.cnnic}</div>
              </div>
              <div>
                <strong>DOB</strong>
                <div className="text-muted-foreground">
                  {new Date(user.dateOfBirth).toLocaleDateString()}
                </div>
              </div>
              <div>
                <strong>Gender</strong>
                <div className="text-muted-foreground">{user.gender}</div>
              </div>
              <div>
                <strong>Blood Group</strong>
                <div className="text-muted-foreground">{user.bloodGroup}</div>
              </div>
              <div className="col-span-2">
                <strong>Address</strong>
                <div className="text-muted-foreground">
                  {user.address}
                </div>
              </div>
            </div>

            <Separator />

            <div className="text-sm space-y-1">
              <div>
                <strong>Father / Guardian</strong>
              </div>
              <div className="text-muted-foreground">
                {user.fatherName} • {user.fatherPhone}
              </div>
              <div className="text-muted-foreground">
                CNIC: {user.fatherCnic} • {user.fatherOccupation}
              </div>
            </div>

            <div className="flex gap-2 mt-2">
              <Dialog open={isDialogOpen}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4 max-h-[70vh] overflow-y-auto">
                  {Object.keys(form).map((key) => (
  <div className="grid gap-2" key={key}>
    <Label className="capitalize" htmlFor={key}>
      {key}
    </Label>

    {key === "dateOfBirth" ? (
      // ✅ Shadcn DatePicker for DOB
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start text-left font-normal"
          >
            {form.dateOfBirth
              ? new Date(form.dateOfBirth).toLocaleDateString()
              : "Pick a date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={form.dateOfBirth ? new Date(form.dateOfBirth) : undefined}
            onSelect={(date:any) => {
              if (date) {
                handleChange({
                  target: { name: "dateOfBirth", value: date.toISOString() },
                });
              }
            }}
            disabled={(locked as any)[key]}
          />
        </PopoverContent>
      </Popover>
    ) : (
      // ✅ Default Input
      <Input
        id={key}
        name={key}
        required
        value={(form as any)[key] ?? ""}
        onChange={handleChange}
        disabled={(locked as any)[key]}
      />
    )}
  </div>
))}

                  </div>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    {savingPersonalInfoLoading ?
                    <Button >Saving...</Button>
                    :<Button onClick={handleUpdatePersonalInfo}>Save</Button>
                    }
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Button className="flex-1" onClick={() =>{
                 setForm({
                    firstName: user?.firstName||"" ,
                    lastName: user?.lastName ,
                    phone: user?.phone ,
                    dateOfBirth: user?.dateOfBirth ,
                    bloodGroup: user?.bloodGroup ,
                    address: user?.address ,
                    cnnic:user?.cnnic,
                    city: user?.city ,
                    state: user?.state ,
                    postalCode: user?.postalCode ,
                    fatherName: user?.fatherName ,
                    fatherPhone: user?.fatherPhone ,
                    fatherOccupation: user?.fatherOccupation 
                })
                 setIsDialogOpen(true)

              }}>
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Hostel & Room Card */}
        <div>
            <Card>
          <CardHeader>
            <CardTitle>Hostel & Room</CardTitle>
            <CardDescription>Assigned hostel and room details</CardDescription>
          </CardHeader>
         {
            user.hostel ?
             <CardContent className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1" />
              <div>
                <div className="font-medium">{user.hostel.name}</div>
                <div className="text-muted-foreground">
                  {user.hostel.address}, {user.hostel.city}, {user.hostel.state}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1" />
              <div>
                <div className="text-muted-foreground">{user.hostel.phone}</div>
                <div className="text-muted-foreground">{user.hostel.email}</div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Room</div>
                <div className="font-medium">
                  Room {user.room.roomNumber} Floor {user.room.floor} • {user.room.roomType}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Check-in</div>
                <div className="font-medium">
                  {new Date(user.checkInDate).toLocaleDateString()}
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm text-muted-foreground">Stay duration</div>
              <div className="flex items-center gap-3 mt-2">
                <Progress value={stayProgress} className="h-3 flex-1" />
                <div className="w-20 text-right text-sm">{stayDays} days</div>
              </div>
            </div>
            <div>
              <div className="text-sm text-primary font-medium">Roomates</div>
              <div className="space-y-2 mt-2 flex flex-wrap items-center">
                {user.room?.students?.map((stud: any, index: any) => (
                  <div key={index} className=" flex items-center px-1">
                    <div>
                      <p className="text-sm font-medium">{stud.id === user.id ? "You ":stud.firstName+ " " +stud.lastName}</p>
                    </div>
                    <Dot />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full">
              <Button
                variant="outline"
                onClick={() => setIsComplaintBoxOpen(true)}
                className="w-full"
              >
                Create complaint / review
              </Button>
            </div>
            <Dialog open={isComplaintBoxOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Feedback</DialogTitle>
                  <DialogDescription>
                    Create a complaint or review about a hostel / apparment.
                  </DialogDescription>
                  <Alert>
                    <AlertTitle>
                      <h3 className="text-sm font-bold">Note</h3>
                    </AlertTitle>
                    <AlertDescription>
                      <ul className="text-primary">
                        <li>
                          <strong>Complaint</strong> will goes to the hostel
                          staff privately.
                        </li>
                        <li>
                          <strong>Review</strong> will publish publicaly about
                          hostel.
                        </li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                </DialogHeader>
                <div className="space-y-2 w-full grid gap-4 grid-cols-2">
                  <div className="space-y-2 w-full">
                    <Label htmlFor="type">Select Type *</Label>
                    <Select required onValueChange={(e) => setFeedbackType(e)}>
                      <SelectTrigger className="w-full">
                        <SelectValue
                          className="text-muted"
                          defaultValue={"3"}
                          placeholder="Select feedback type"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Feedback types</SelectLabel>
                          <SelectItem value="review">Review</SelectItem>
                          <SelectItem value="complaint">Complaint</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 w-full">
                    <Label htmlFor="type">Priority /ratings *</Label>
                    <Select required>
                      <SelectTrigger className="w-full">
                        <SelectValue
                          className="text-muted"
                          defaultValue={"medium"}
                          placeholder="Rate / priority"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {feedbackType == "review" ? (
                          <SelectGroup>
                            <SelectLabel>Rate this</SelectLabel>
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <SelectItem
                                key={rating}
                                className="w-full"
                                value={String(rating)}
                              >
                                <div className="flex justify-between items-center space-x-1">
                                  <RatingStars rating={rating} />
                                  <span>{rating}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        ) : (
                          <SelectGroup>
                            <SelectLabel>Complaint priority</SelectLabel>
                            <SelectItem value="high" className="flex space-x-1">
                              <FlagTriangleRightIcon className="text-yellow-500" />
                              <p>High</p>
                            </SelectItem>
                            <SelectItem
                              value="urgent"
                              className="flex space-x-1"
                            >
                              <FlagTriangleRightIcon className="text-red-500" />
                              <p>Urgent</p>
                            </SelectItem>
                            <SelectItem
                              value="medium"
                              className="flex space-x-1"
                            >
                              <FlagTriangleRightIcon className="text-blue-500" />
                              <p>Medium</p>
                            </SelectItem>
                          </SelectGroup>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Label htmlFor="type">Text message</Label>
                <Textarea
                  className="min-h-[100px] max-h-[400px]"
                  placeholder="(e.g) Ac is not working since yesterday. Please fix this"
                ></Textarea>
                <DialogFooter>
                  <Button
                    onClick={() => setIsComplaintBoxOpen(false)}
                    variant={"outline"}
                    className="text-red-500 "
                  >
                    Close
                  </Button>
                  <Button>Submit complaint</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
          :
          <h2 className="font-bold text-center">Not admitted in any hostel</h2>
         }
        </Card>
        </div>

        {/* Financial Card */}
        <div>
            <Card>
          <CardHeader>
            <CardTitle>Financial Summary</CardTitle>
            <CardDescription>
              A quick look at invoices & payments
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-muted rounded text-center">
                <div className="text-xs">Total Invoices</div>
                <div className="font-semibold">
                  PKR {totalInvoices?.toLocaleString()}
                </div>
              </div>
              <div className="p-3 bg-muted rounded text-center">
                <div className="text-xs">Total Paid</div>
                <div className="font-semibold">
                  PKR {totalPaid?.toLocaleString()}
                </div>
              </div>
              <div className="p-3 bg-muted rounded text-center">
                <div className="text-xs">Pending</div>
                <div className="font-semibold text-red-600">
                  PKR {totalDue?.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">Next Due</div>
                <div className="font-medium">
                  {user?.invoices?.find((i: any) => i.status !== "paid")
                    ?.dueDate ?? "All clear"}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Last Payment
                </div>
                <div className="font-medium">
                  {user.payments && user?.payments[user?.payments?.length - 1]?.date ? "-":""}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>

      {/* Middle row: Invoices & Payments list */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Invoices</CardTitle>
            <CardDescription>
              All invoices generated for your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {user?.invoices?.map((inv: any) => (
              <div
                key={inv.id}
                className="flex items-center justify-between p-3 bg-background rounded"
              >
                <div>
                  <div className="font-medium">Invoice {inv.id}</div>
                  <div className="text-muted-foreground text-xs">
                    Due: {inv.dueDate} • Status: {inv.status}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">
                    PKR {inv.amount.toLocaleString()}
                  </div>
                  <div className="text-xs mt-1">
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payments</CardTitle>
            <CardDescription>Confirmed payments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {user?.payments?.map((p: any) => (
              <div
                key={p.id}
                className="flex items-center justify-between p-3 bg-background rounded"
              >
                <div>
                  <div className="font-medium">Payment {p.id}</div>
                  <div className="text-muted-foreground text-xs">
                    Method: {p.method} • Date: {p.date}
                  </div>
                </div>
                <div className="text-right font-medium">
                  PKR {p.amount.toLocaleString()}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <Separator />
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div>
          Account created: {new Date(user.createdAt).toLocaleDateString()}
        </div>
        <div>Last updated: {new Date(user.updatedAt).toLocaleDateString()}</div>
      </div>
    </div>
  );
}
