<template>
    <button
      @click="downloadPdf"
      class="text-xl text-zinc-300 mt-8 mb-8 leading-relaxed font-light bg-zinc-900/50 border border-zinc-700 rounded-full px-8 py-3 backdrop-blur-sm shadow-md hover:bg-zinc-800/70 transition-colors duration-300"
    >
      DOWNLOAD CV
    </button>
  </template>
  
  <script>
  export default {
    name: 'DownloadPdfButton',
    props: {
      pdfUrl: String,
      pdfFileName: String,
    },
    methods: {
      downloadPdf() {
        const link = document.createElement('a');
        link.href = this.pdfUrl;
        link.target = '_blank';
        link.download = this.pdfFileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },
    },
  }
  </script>
  