export default function MyPendingApprovalsWidget() {
  return (
    <div className="px-5 pb-5 overflow-y-auto h-full">
      {/* Widget Heading */}
      <h2 className="text-[24px] font-medium leading-none flex items-center gap-2" style={{ fontFamily: 'Poppins', color: 'var(--color-primary-darkest)', padding: '24px 12px 24px 8px' }}>
        <span className="w-1 h-6 rounded" style={{ backgroundColor: 'var(--color-primary-darkest)' }}></span>
        My Pending Approvals
      </h2>

      {/* Leave Request */}
      <div className="mb-4">
        <h4
          style={{
            color: 'var(--color-primary-dark)',
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '100%',
            marginBottom: '12px',
            marginTop: '12px',
          }}
        >
          Leave Request
        </h4>
        <div
          style={{
            backgroundColor: 'var(--color-primary-lightest)',
            borderRadius: '12px',
            border: '1px solid var(--color-primary-lightest)',
            opacity: 0.7,
          }}
          className="p-3"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1">
              <p
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '100%',
                  color: '#000000',
                }}
              >
                Ayesha Khan
              </p>
              <p
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '100%',
                  color: '#333333',
                  marginTop: '4px',
                }}
              >
                Dec 03–Dec 05
              </p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button className="bg-teal-500 text-white px-2 py-1 rounded-full text-xs font-medium hover:bg-teal-600 transition-colors">Approve</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium hover:bg-red-600 transition-colors">Reject</button>
            </div>
          </div>
        </div>
      </div>

      {/* Timesheet */}
      <div className="mb-4">
        <h4
          style={{
            color: 'var(--color-primary-dark)',
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '100%',
            marginBottom: '8px',
          }}
        >
          Timesheet
        </h4>
        <div
          style={{
            backgroundColor: 'var(--color-primary-lightest)',
            borderRadius: '12px',
            border: '1px solid var(--color-primary-lightest)',
            opacity: 0.7,
          }}
          className="p-3"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1">
              <p
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '100%',
                  color: '#000000',
                }}
              >
                Bilal Ahmed
              </p>
              <p
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '100%',
                  color: '#333333',
                  marginTop: '4px',
                }}
              >
                Week of Dec 23
              </p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button className="bg-teal-500 text-white px-2 py-1 rounded-full text-xs font-medium hover:bg-teal-600 transition-colors">Approve</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium hover:bg-red-600 transition-colors">Reject</button>
            </div>
          </div>
        </div>
      </div>

      {/* Claim */}
      <div>
        <h4
          style={{
            color: 'var(--color-primary-dark)',
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '100%',
            marginBottom: '8px',
          }}
        >
          Claim
        </h4>
        <div
          style={{
            backgroundColor: 'var(--color-primary-lightest)',
            borderRadius: '12px',
            border: '1px solid var(--color-primary-lightest)',
            opacity: 0.7,
          }}
          className="p-3"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1">
              <p
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '100%',
                  color: '#000000',
                }}
              >
                Sara Iqbal
              </p>
              <p
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '100%',
                  color: '#333333',
                  marginTop: '4px',
                }}
              >
                Medical reimbursement
              </p>
              <p
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '100%',
                  color: '#333333',
                  marginTop: '4px',
                }}
              >
                12,500 PKR
              </p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button className="bg-teal-500 text-white px-2 py-1 rounded-full text-xs font-medium hover:bg-teal-600 transition-colors">Approve</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium hover:bg-red-600 transition-colors">Reject</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
