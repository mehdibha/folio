import { Button, Separator } from "../ui"

export const Footer = () => {
  return (
    <div className="container mt-12">
      <Separator />
      <div className="flex items-center justify-between py-4">
        <div>
          <p>
            © 2020-present <a>Notionfol.io</a>. All Rights Reserved.
          </p>
          <p>Designed & Built by Mehdi-BHA. 155 stars</p>
        </div>
        <div className="flex space-x-1">
          <Button variant="secondary" className=""></Button>
        </div>
      </div>
    </div>
  )
}
