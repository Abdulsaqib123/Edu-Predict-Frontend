import { useContext, useState } from "react";
import { UploadContext } from "../../../../contexts/UploadContext";
import errorToast from "../../../../components/toast/errorToast/errorToast";

const TeacherUploadResultsPage = () => {
    const [file, setFile] = useState(null);

    const { UploadFile, loading } = useContext(UploadContext);

    const handleFileUpload = async () => {
        if (!file) {
            errorToast("Please select a file to upload.");
            return;
        }

        let tempData = {
            file: file,
        };

        await UploadFile(tempData);

        setFile(null);
    };

    return (
        <div className="pb-40">
            <h1 className="text-black font-semibold md:text-3xl sm:text-2xl text-lg mb-6">
                Upload Students Results
            </h1>
            <div className="bg-white w-full shadow-lg sm:p-6 p-6 rounded-lg">
                <div className="">
                    <input
                        class="block p-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-white focus:outline-none dark:bg-primaryColor dark:border-primaryColor dark:placeholder-gray-400"
                        id="file_input"
                        type="file"
                        accept=".csv, .xlsx"
                        onChange={(e) => setFile(e.target.files[0])}
                    />

                    <p
                        class="mt-1 text-sm text-gray-500 dark:text-gray-700"
                        id="file_input_help"
                    >
                        CSV, XLSX
                    </p>
                </div>
                <button
                    type="submit"
                    className="uppercase flex items-center justify-center bg-black text-white font-semibold sm:text-md sm:text-sm text-xs sm:py-3 py-2 sm:px-9 px-6 rounded-[50px] transition-all hover:bg-transparent border-2 border-primaryColor hover:text-primaryColor sm:mt-9 mt-6 group"
                    onClick={handleFileUpload}
                >
                    {!loading && "Upload"}
                    {loading && (
                        <div role="status">
                            <svg
                                aria-hidden="true"
                                class="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 group-hover:text-white fill-primaryColor"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
}

export default TeacherUploadResultsPage;