export default function QuickActionsWidget() {
  return (
    <div className="px-5 pb-5 overflow-y-auto h-full">
      {/* Widget Heading */}
      <h2
        className="text-[24px] font-medium leading-none flex items-center gap-2"
        style={{
          fontFamily: 'Poppins',
          color: 'var(--color-primary-darkest)',
          padding: '24px 12px 24px 8px',
        }}
      >
        <span
          className="w-1 h-6 rounded"
          style={{ backgroundColor: 'var(--color-primary-darkest)' }}
        ></span>
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-3">
        <button
          className="flex flex-col items-center gap-3 hover:opacity-90 transition-opacity p-3 rounded-lg"
          style={{
            backgroundColor: 'var(--color-primary-lightest)',
            border: '1px solid var(--color-primary-lightest)',
            opacity: 0.7,
          }}
        >
          <span className="text-xl">👤</span>
          <span
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '100%',
              color: '#333333',
              textAlign: 'center',
            }}
          >
            Add Employee
          </span>
        </button>
        <button
          className="flex flex-col items-center gap-3 hover:opacity-90 transition-opacity p-3 rounded-lg"
          style={{
            backgroundColor: 'var(--color-primary-lightest)',
            border: '1px solid var(--color-primary-lightest)',
            opacity: 0.7,
          }}
        >
          <span className="text-xl">✓</span>
          <span
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '100%',
              color: '#333333',
              textAlign: 'center',
            }}
          >
            Approve Leave
          </span>
        </button>
        <button
          className="flex flex-col items-center gap-3 hover:opacity-90 transition-opacity p-3 rounded-lg"
          style={{
            backgroundColor: 'var(--color-primary-lightest)',
            border: '1px solid var(--color-primary-lightest)',
            opacity: 0.7,
          }}
        >
          <span className="text-xl">📋</span>
          <span
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '100%',
              color: '#333333',
              textAlign: 'center',
            }}
          >
            Create Requisition
          </span>
        </button>
        <button
          className="flex flex-col items-center gap-3 hover:opacity-90 transition-opacity p-3 rounded-lg"
          style={{
            backgroundColor: 'var(--color-primary-lightest)',
            border: '1px solid var(--color-primary-lightest)',
            opacity: 0.7,
          }}
        >
          <span className="text-xl">💰</span>
          <span
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '100%',
              color: '#333333',
              textAlign: 'center',
            }}
          >
            Run Payroll
          </span>
        </button>
        <button
          className="flex flex-col items-center gap-3 hover:opacity-90 transition-opacity p-3 rounded-lg"
          style={{
            backgroundColor: 'var(--color-primary-lightest)',
            border: '1px solid var(--color-primary-lightest)',
            opacity: 0.7,
          }}
        >
          <span className="text-xl">📅</span>
          <span
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '100%',
              color: '#333333',
              textAlign: 'center',
            }}
          >
            Schedule Interview
          </span>
        </button>
        <button
          className="flex flex-col items-center gap-3 hover:opacity-90 transition-opacity p-3 rounded-lg"
          style={{
            backgroundColor: 'var(--color-primary-lightest)',
            border: '1px solid var(--color-primary-lightest)',
            opacity: 0.7,
          }}
        >
          <span className="text-xl">🎯</span>
          <span
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '100%',
              color: '#333333',
              textAlign: 'center',
            }}
          >
            Create Goal Cycle
          </span>
        </button>
        <button
          className="flex flex-col items-center gap-3 hover:opacity-90 transition-opacity p-3 rounded-lg"
          style={{
            backgroundColor: 'var(--color-primary-lightest)',
            border: '1px solid var(--color-primary-lightest)',
            opacity: 0.7,
          }}
        >
          <span className="text-xl">📅</span>
          <span
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '100%',
              color: '#333333',
              textAlign: 'center',
            }}
          >
            Schedule Interview
          </span>
        </button>
        <button
          className="flex items-center justify-center gap-2 hover:opacity-90 transition-opacity p-3 rounded-lg"
          style={{
            backgroundColor: 'var(--color-primary-lightest)',
            border: '1px solid var(--color-primary-lightest)',
            opacity: 0.7,
          }}
        >
          <span
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '100%',
              color: '#333333',
            }}
          >
            More
          </span>
          <span className="text-lg">•••</span>
        </button>
      </div>
    </div>
  );
}
