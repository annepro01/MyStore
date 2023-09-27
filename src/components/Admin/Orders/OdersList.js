import OrdersStats from "./OrdersStatistics";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  
  // More people...
];

export default function OrdersList() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      
      {/* order stats */}
      <OrdersStats/>

      <h3 className="text-lg font-medium leading-6 text-gray-900 mt-3">Recent Orders</h3>
        <div className="-mx-4 mt-3 overflow-hidden ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <th scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">OrderID</th>
              <th scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Payment Method</th>
              <th scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Order Date</th>
              <th scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Delivery Date</th>
              <th scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Status</th>
              <th scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Total</th>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {people.map((person) =>(
                <tr key={person.email}>
                  {/* first */}
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                    {person.name}
                    <dl className="font-normal lg:hidden">
                      <dt className="sr-only">Title</dt>
                      <dd className="mt-1 truncate text-gray-700">{person.title}</dd>
                      <dt className="sr-only sm:hidden">Email</dt>
                      <dd className="mt-1 truncate text-gray-500 ">{person.email}</dd>
                    </dl>  
                  </td>
                 {/* second */}
                 
                  <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                     {person.title}
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                     {person.email}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">
                      {person.role}
                  </td>
                  <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit<span className="sr-only">, {person.name}</span>
                  </a>
                </td>
                </tr>
              ))}
            </tbody>
            
          </table>
        </div>
        
      
    </div>
    
  );
}
