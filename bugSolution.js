```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    let cleanup = () => {
      console.log('Component unmounted');
    };
    const intervalId = setInterval(() => {
      console.log('Component is still mounted');
    }, 1000);
    
    cleanup = () => {
        clearInterval(intervalId);
        console.log('Component unmounted');
      };
      return cleanup;
  }, []);

  useEffect(() => {
    return () => {
      setMounted(false);
    };
  }, []);

  if(!mounted) return null;
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```