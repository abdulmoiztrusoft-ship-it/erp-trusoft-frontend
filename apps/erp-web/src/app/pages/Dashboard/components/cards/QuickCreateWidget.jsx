export default function QuickCreateWidget() {
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
        Quick Create
      </h2>

      <div className="space-y-2">
        <button
          className="w-full flex items-center transition-colors p-3 rounded-lg hover:bg-gray-50"
          style={{ gap: '12px' }}
        >
          <span className="text-lg flex-shrink-0">📋</span>
          <span
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '100%',
              color: '#333333',
              textAlign: 'left',
            }}
          >
            New job requisition
          </span>
        </button>
        <button
          className="w-full flex items-center transition-colors p-3 rounded-lg hover:bg-gray-50"
          style={{ gap: '12px' }}
        >
          <span className="text-lg flex-shrink-0">📚</span>
          <span
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '100%',
              color: '#333333',
              textAlign: 'left',
            }}
          >
            New course
          </span>
        </button>
        <button
          className="w-full flex items-center transition-colors p-3 rounded-lg hover:bg-gray-50"
          style={{ gap: '12px', backgroundColor: 'rgba(179, 226, 222, 0.2)' }}
        >
          <span className="text-lg flex-shrink-0">📄</span>
          <span
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '100%',
              color: '#333333',
              textAlign: 'left',
            }}
          >
            New policy document
          </span>
        </button>
        <button
          className="w-full flex items-center transition-colors p-3 rounded-lg hover:bg-gray-50"
          style={{ gap: '12px' }}
        >
          <span className="text-lg flex-shrink-0">⏰</span>
          <span
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '100%',
              color: '#333333',
              textAlign: 'left',
            }}
          >
            New shift rule
          </span>
        </button>
      </div>
    </div>
  );
}
