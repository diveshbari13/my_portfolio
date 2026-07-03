import Link from "next/link";

export default function TcnLstmPage() {
  return (
    <main className="min-h-screen overflow-y-auto bg-[#F4F1EA] text-[#3E2723] font-serif">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#D4C4A8] text-[#3E2723] py-4 px-8 flex justify-between items-center shadow-sm">
        <Link href="/library" className="hover:opacity-70 transition-opacity">
          &lt;- Back to Library
        </Link>
      </nav>

      <article className="max-w-3xl mx-auto py-16 px-6">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          A Comparative Study of TCN-LSTM, LSTM, and GRU Models for Weather Forecasting
        </h1>

        <div className="italic text-[#3E2723]/70 mb-8">
          <p>Author: Divesh Shyamkant Bari</p>
        </div>

        <hr className="border-t border-[#3E2723]/20 my-8" />

        {/* Abstract */}
        <h2 className="text-2xl font-bold mt-12 mb-6 border-b border-[#3E2723]/10 pb-2">Abstract</h2>

        <p className="text-lg leading-relaxed mb-6 text-[#3E2723]/90">
          This study compares a TCN-LSTM hybrid deep learning model with simpler GRU and LSTM standalone models. Although hybrid models are often proposed for their potential to achieve state-of-the-art performance in time series forecasting, this study finds that a standalone model with moderate complexity achieves the best MAE. This paper focuses on validating architectural complexity against simpler baselines.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-[#3E2723]/90">
          In this paper a comparative study of a TCN-LSTM hybrid, a standalone GRU, and a standalone LSTM is presented for temperature forecasting on the benchmark Jena Climate dataset. A fair comparison was ensured by training all the models on the same feature-engineered data and individually optimizing through a systematic hyperparameter search.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-[#3E2723]/90">
          The results show a clear performance hierarchy, though the simplest model is not superior. The standalone GRU achieves the best performance with a final test set MAE of 1.8458°C, outperforming both the LSTM (1.8890°C) and the TCN-LSTM hybrid (1.9978°C). However, a qualitative analysis reveals that the hybrid model excels in capturing the high-frequency patterns of the data, an advantage that is not reflected in the MAE metric.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-[#3E2723]/90">
          This study emphasizes the importance of both quantitative and qualitative evaluation in model selection.
        </p>

        {/* DOI Link */}
        <a
          href="https://doi.org/10.36227/techrxiv.176222791.13308024/v1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 border border-[#3E2723]/30 rounded-full text-sm font-sans tracking-wide hover:bg-[#3E2723] hover:text-[#F4F1EA] transition-colors"
        >
          [ Read Full Preprint on TechRxiv ]
        </a>
      </article>
    </main>
  );
}
