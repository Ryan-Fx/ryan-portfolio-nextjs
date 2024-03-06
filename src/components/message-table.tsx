interface MsgsProps {
  id: string;
  email: string;
  message: string;
  createdAt: Date;
}

export default function Message({ msgs }: { msgs: MsgsProps[] }) {
  return (
    <>
      <table className="w-full">
        <thead className="text-left">
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Message</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {msgs.map((msg: MsgsProps, index: number) => (
            <tr key={msg.id}>
              <td>{index + 1}</td>
              <td>{msg.email}</td>
              <td>{msg.message}</td>
              <td>{msg.createdAt.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
