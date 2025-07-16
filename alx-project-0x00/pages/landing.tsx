import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />

       <div className="space-y-2">
        <p className="font-semibold">Small Buttons:</p>
        <div className="space-x-2">
          <Button title="Small + sm" styles="text-sm rounded-sm bg-blue-600" />
          <Button title="Small + md" styles="text-sm rounded-md bg-green-600" />
          <Button title="Small + full" styles="text-sm rounded-full bg-red-600" />
        </div>
      </div>

      <div className="space-y-2">
        <p className="font-semibold">Medium Buttons:</p>
        <div className="space-x-2">
          <Button title="Medium + sm" styles="text-base rounded-sm bg-yellow-600" />
          <Button title="Medium + md" styles="text-base rounded-md bg-purple-600" />
          <Button title="Medium + full" styles="text-base rounded-full bg-pink-600" />
        </div>
      </div>

      <div className="space-y-2">
        <p className="font-semibold">Large Buttons:</p>
        <div className="space-x-2">
          <Button title="Large + sm" styles="text-xl rounded-sm bg-teal-600" />
          <Button title="Large + md" styles="text-xl rounded-lg bg-indigo-600" />
          <Button title="Large + full" styles="text-xl rounded-full bg-gray-600" />
        </div>
      </div>


    </div>
  )
}
export default Landing