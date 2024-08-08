import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function EditProfile() {
    return (
        <main>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Edit Profile</CardTitle>
                    <CardDescription>Make changes to your profile here. Click save when you're done.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-4 gap-4 items-center">
                    <Label className="font-bold col-span-1 text-right" htmlFor="Name">Name</Label>
                    <Input id="Name" placeholder="Email" className="col-span-3"></Input>

                    <Label className="font-bold col-span-1 text-right" htmlFor="Username">Username</Label>
                    <Input id="Username" placeholder="@peduarte" className="col-span-3"></Input>
                </CardContent>

                <CardFooter className="flex justify-between">
                    <Button variant="ghost"></Button>
                    <Button className="bg-green-500 hover:bg-green-700">Save Changes</Button>
                </CardFooter>
            </Card>
        </main>

    );
}