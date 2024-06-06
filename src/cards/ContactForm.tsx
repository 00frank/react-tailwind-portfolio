import Button from "@/components/Button"
import Card from "@/components/Card"

function ContactForm() {
  return (
    <Card
      className="p-8"
      border>
      <div>
        <h3 className="text-white font-bold block">Say hi</h3>
        <p className="text-slate-200/70 mb-2">I'll try to reply asap ⚡️</p>
      </div>
      <form action="https://formspree.io/f/xqkgnook" method="POST">
        <input className="rounded-lg p-2 bg-zinc-800 text-sm w-full mb-2" name="email" type="text" placeholder="Email" />
        <textarea className="rounded-lg p-2 bg-zinc-800 text-sm w-full resize-none mb-2" placeholder="Message" name="message" cols={30} rows={10} />
        <Button
          type="submit"
          className="w-full justify-center font-bold cursor-pointer">
          Send
        </Button>
      </form>
    </Card>
  )
}

export default ContactForm