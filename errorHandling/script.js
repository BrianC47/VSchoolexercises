try {
    // risky code
    let result = riskyOperation();
    console.log("Success:", result);
  } catch (error) {
    // handles errors
    console.error("Caught an error:", error.message);
  } finally {
    // always runs
    console.log("Finished try/catch block.");
  }
  