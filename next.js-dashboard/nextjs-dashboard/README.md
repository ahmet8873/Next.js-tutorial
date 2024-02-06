## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

### Pass the id to the Server Action

you want to pass the id to the Server Action so you can update the right record in your database. You cannot pass the id as an argument like so:

```
// Passing an id as argument won't work
<form action={updateInvoice(id)}>
```

Instead, you can pass id to the Server Action using JS bind. This will ensure that any values passed to the Server Action are encoded.

```
// ...
import { updateInvoice } from '@/app/lib/actions';

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);

  return (
    <form action={updateInvoiceWithId}>
      <input type="hidden" name="id" value={invoice.id} />
    </form>
  );
}
```
