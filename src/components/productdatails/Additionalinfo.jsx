export default function AdditionalInfoTab() {
  return (
    <div className="overflow-hidden rounded-3xl border">
      <table className="w-full">
        <tbody>

          <tr className="border-b">
            <td className="p-4 font-semibold">
              Material
            </td>
            <td className="p-4">
              100% Cotton
            </td>
          </tr>

          <tr className="border-b">
            <td className="p-4 font-semibold">
              Weight
            </td>
            <td className="p-4">
              450gm
            </td>
          </tr>

          <tr>
            <td className="p-4 font-semibold">
              Fit
            </td>
            <td className="p-4">
              Regular Fit
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}